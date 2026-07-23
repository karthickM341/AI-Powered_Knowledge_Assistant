from sqlalchemy import (
    Column,
    BigInteger,
    Enum,
    Text,
    JSON,
    TIMESTAMP,
    ForeignKey,
    func
)

from app.core.database import Base


class ConversationMessage(Base):

    __tablename__ = "conversation_messages"

    id = Column(BigInteger, primary_key=True, autoincrement=True)

    conversation_id = Column(
        BigInteger,
        ForeignKey("conversations.id", ondelete="CASCADE"),
        nullable=False
    )

    sender = Column(
        Enum("user", "assistant"),
        nullable=False
    )

    message = Column(Text)

    source_documents = Column(JSON)

    created_at = Column(
        TIMESTAMP,
        server_default=func.now()
    )