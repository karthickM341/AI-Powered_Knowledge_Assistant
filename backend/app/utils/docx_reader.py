from docx import Document


def extract_docx_text(path: str):

    doc = Document(path)

    text = ""

    for paragraph in doc.paragraphs:
        text += paragraph.text + "\n"

    return text, 1