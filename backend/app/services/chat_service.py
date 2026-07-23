from app.services.vector_service import search_documents
from app.ai.gemini import ask_gemini


def answer_question(question):

    results = search_documents(question)

    context = "\n\n".join(
        results["documents"][0]
    )

    answer = ask_gemini(
        context=context,
        question=question
    )

    return answer, results["metadatas"][0]