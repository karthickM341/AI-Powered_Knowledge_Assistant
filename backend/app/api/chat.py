from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.core.dependencies import get_current_user
from app.models.user import User

from app.schemas.chat import AskQuestion

from app.services.chat_service import answer_question
from app.services.conversation_service import save_chat

from app.models.conversation import Conversation
from app.models.conversation_message import ConversationMessage

router = APIRouter(
    prefix="/chat",
    tags=["Chat"]
)


@router.post("/ask")
def ask(
    request: AskQuestion,
    db: Session = Depends(get_db)
):

    # temporary user
    user_id = current_user.id

    answer, sources = answer_question(
        request.question
    )

    save_chat(
        db,
        user_id,
        request.question,
        answer,
        sources
    )

    return {
        "answer": answer,
        "sources": sources
    }

@router.get("/history")
def history(
    db: Session = Depends(get_db)
):

    conversations = db.query(
        Conversation
    ).filter(
    Conversation.user_id == current_user.id
    ).all()

    data = []

    for conversation in conversations:

        messages = db.query(
            ConversationMessage
        ).filter(
            ConversationMessage.conversation_id == conversation.id
        ).all()

        data.append({
            "conversation_id": conversation.id,
            "title": conversation.title,
            "messages": messages
        })

    return data