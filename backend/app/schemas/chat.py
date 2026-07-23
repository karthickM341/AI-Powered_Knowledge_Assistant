from pydantic import BaseModel


class AskQuestion(BaseModel):
    question: str


class ChatResponse(BaseModel):
    answer: str
    sources: list