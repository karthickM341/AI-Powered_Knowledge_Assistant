import google.generativeai as genai

from app.core.config import settings

genai.configure(api_key=settings.GEMINI_API_KEY)

model = genai.GenerativeModel("gemini-2.5-flash")


def ask_gemini(context: str, question: str) -> str:
    """
    Generate an answer using only the retrieved document context.
    """

    prompt = f"""
You are an AI Knowledge Assistant.

Rules:
1. Answer ONLY using the provided context.
2. Do NOT use your own knowledge.
3. If the answer is not present in the context, reply exactly:
   "I couldn't find this information in the uploaded documents."
4. Keep the answer clear and concise.
5. If possible, present important information as bullet points.

------------------------
Context:
{context}
------------------------

Question:
{question}

Answer:
"""

    response = model.generate_content(prompt)

    return response.text.strip()