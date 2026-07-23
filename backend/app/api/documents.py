import os

from fastapi import (
    APIRouter,
    UploadFile,
    File,
    HTTPException,
    Depends
)

from sqlalchemy.orm import Session

from app.core.database import get_db
from app.core.dependencies import get_current_user
from app.models.user import User

from app.models.document import Document
from app.models.document_chunk import DocumentChunk

from app.services.document_service import save_file

from app.utils.pdf_reader import extract_pdf_text
from app.utils.docx_reader import extract_docx_text
from app.utils.txt_reader import extract_txt_text
from app.utils.text_splitter import split_text

router = APIRouter(
    prefix="/documents",
    tags=["Documents"]
)

@router.post("/upload")
def upload_document(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    allowed = ["pdf", "docx", "txt"]

    extension = file.filename.split(".")[-1].lower()

    if extension not in allowed:
        raise HTTPException(
            status_code=400,
            detail="Only PDF DOCX TXT files are supported"
        )

    filename, path = save_file(file)

    document = Document(
        user_id=current_user.id,          # Temporary until JWT authentication is connected
        original_name=file.filename,
        filename=filename,
        file_type=extension,
        file_size=os.path.getsize(path),
        file_path=path,
        status="Processing"
    )

    db.add(document)
    db.commit()
    db.refresh(document)

    if extension == "pdf":
        text, pages = extract_pdf_text(path)

    elif extension == "docx":
        text, pages = extract_docx_text(path)

    else:
        text, pages = extract_txt_text(path)

    chunks = split_text(text)

    for index, chunk in enumerate(chunks):

        db_chunk = DocumentChunk(
            document_id=document.id,
            chunk_index=index,
            chunk_text=chunk,
            page_number=1
        )

        db.add(db_chunk)

    document.total_pages = pages
    document.total_chunks = len(chunks)
    document.status = "Completed"

    db.commit()

    return {
        "message": "Document uploaded successfully",
        "document_id": document.id,
        "pages": pages,
        "chunks": len(chunks)
    }

@router.get("/")
def get_documents(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    return db.query(Document).filter(
        Document.user_id == current_user.id
    ).all()

@router.delete("/{document_id}")
def delete_document(
    document_id: int,
    db: Session = Depends(get_db)
):

    document = db.query(Document).filter(
        Document.id == document_id,
        Document.user_id == current_user.id
    ).first()

    if not document:
        raise HTTPException(
            status_code=404,
            detail="Document not found"
        )

    if os.path.exists(document.file_path):
        os.remove(document.file_path)

    db.delete(document)
    db.commit()

    return {
        "message": "Document deleted successfully"
    }