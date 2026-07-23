from sqlalchemy import (
    Column,
    BigInteger,
    String,
    Text,
    Enum,
    TIMESTAMP,
    ForeignKey,
    func
)

from app.core.database import Base


class Document(Base):
    __tablename__ = "documents"

    id = Column(BigInteger, primary_key=True, autoincrement=True)

    user_id = Column(
        BigInteger,
        ForeignKey("users.id", ondelete="CASCADE"),
        nullable=False
    )

    original_name = Column(String(255))
    filename = Column(String(255))
    file_type = Column(String(20))
    file_size = Column(BigInteger)
    file_path = Column(Text)

    status = Column(
        Enum(
            "Uploaded",
            "Processing",
            "Completed",
            "Failed"
        ),
        default="Uploaded"
    )

    total_pages = Column(BigInteger, default=0)
    total_chunks = Column(BigInteger, default=0)

    uploaded_at = Column(
        TIMESTAMP,
        server_default=func.now()
    )

    updated_at = Column(
        TIMESTAMP,
        server_default=func.now(),
        onupdate=func.now()
    )