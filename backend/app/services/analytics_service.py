from sqlalchemy import func
from sqlalchemy.orm import Session

from app.models.document import Document
from app.models.conversation import Conversation
from app.models.conversation_message import ConversationMessage
from app.models.user import User


def get_dashboard_data(db: Session):

    total_documents = db.query(Document).count()

    total_conversations = db.query(Conversation).count()

    total_questions = db.query(
        ConversationMessage
    ).filter(
        ConversationMessage.sender == "user"
    ).count()

    recent = (
        db.query(Conversation)
        .order_by(Conversation.created_at.desc())
        .limit(5)
        .all()
    )

    recent_conversations = []

    for conv in recent:

        recent_conversations.append({
            "conversation_id": conv.id,
            "title": conv.title,
            "created_at": conv.created_at
        })

    active_users = (
        db.query(
            User.name,
            func.count(Conversation.id).label("chat_count")
        )
        .join(
            Conversation,
            User.id == Conversation.user_id
        )
        .group_by(User.id)
        .order_by(func.count(Conversation.id).desc())
        .limit(5)
        .all()
    )

    most_active_users = []

    for user in active_users:

        most_active_users.append({
            "name": user.name,
            "chat_count": user.chat_count
        })

    return {
        "total_documents": total_documents,
        "total_questions": total_questions,
        "total_conversations": total_conversations,
        "recent_conversations": recent_conversations,
        "most_active_users": most_active_users
    }