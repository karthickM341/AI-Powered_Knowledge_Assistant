from app.vector_db.chroma import collection
from app.services.embedding_service import (
    generate_document_embedding,
    generate_query_embedding,
)


def add_document_chunk(chunk_id, text, document_id):

    embedding = generate_document_embedding(text)

    collection.add(
        ids=[str(chunk_id)],
        embeddings=[embedding],
        documents=[text],
        metadatas=[
            {
                "document_id": document_id
            }
        ]
    )


def search_documents(question):

    embedding = generate_query_embedding(question)

    result = collection.query(
        query_embeddings=[embedding],
        n_results=5
    )

    return result