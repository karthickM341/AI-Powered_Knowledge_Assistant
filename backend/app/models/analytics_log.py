from sqlalchemy import (
    Column,
    BigInteger,
    String,
    JSON,
    TIMESTAMP,
    ForeignKey,
    func,
)

from app.core.database import Base


class AnalyticsLog(Base):
    __tablename__ = "analytics_logs"

    id = Column(BigInteger, primary_key=True, autoincrement=True)

    user_id = Column(
        BigInteger,
        ForeignKey("users.id", ondelete="CASCADE"),
        nullable=False
    )

    action = Column(String(100), nullable=False)

    details = Column("metadata", JSON)

    created_at = Column(
        TIMESTAMP,
        server_default=func.now()
    )