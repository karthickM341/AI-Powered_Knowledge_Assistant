from sqlalchemy.orm import Session

from app.models.conversation import Conversation
from app.models.conversation_message import ConversationMessage


def save_chat(
    db: Session,
    user_id: int,
    question: str,
    answer: str,
    sources
):

    conversation = Conversation(
        user_id=user_id,
        title=question[:50]
    )

    db.add(conversation)
    db.commit()
    db.refresh(conversation)

    user_message = ConversationMessage(
        conversation_id=conversation.id,
        sender="user",
        message=question
    )

    assistant_message = ConversationMessage(
        conversation_id=conversation.id,
        sender="assistant",
        message=answer,
        source_documents=sources
    )

    db.add(user_message)
    db.add(assistant_message)

    db.commit()

    return conversation