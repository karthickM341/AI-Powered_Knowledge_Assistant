from sqlalchemy import (
    Column,
    BigInteger,
    Integer,
    Text,
    String,
    TIMESTAMP,
    ForeignKey,
    func
)

from app.core.database import Base


class DocumentChunk(Base):
    __tablename__ = "document_chunks"

    id = Column(BigInteger, primary_key=True, autoincrement=True)

    document_id = Column(
        BigInteger,
        ForeignKey("documents.id", ondelete="CASCADE"),
        nullable=False
    )

    chunk_index = Column(Integer, nullable=False)

    chunk_text = Column(Text)

    vector_id = Column(String(255))

    page_number = Column(Integer)

    created_at = Column(
        TIMESTAMP,
        server_default=func.now()
    )