from pydantic import BaseModel
from typing import List


class AnalyticsResponse(BaseModel):
    total_documents: int
    total_questions: int
    total_conversations: int
    recent_conversations: List[dict]
    most_active_users: List[dict]