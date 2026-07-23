import google.generativeai as genai

from app.core.config import settings

# Configure Gemini
genai.configure(api_key=settings.GEMINI_API_KEY)


def generate_embedding(text: str) -> list[float]:
    """
    Generate embedding vector using Gemini Embedding API.
    """

    response = genai.embed_content(
        model="models/text-embedding-004",
        content=text,
        task_type="retrieval_document"
    )

    return response["embedding"]


def generate_query_embedding(query: str) -> list[float]:
    """
    Generate embedding for search queries.
    """

    response = genai.embed_content(
        model="models/text-embedding-004",
        content=query,
        task_type="retrieval_query"
    )

    return response["embedding"]