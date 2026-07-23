def extract_txt_text(path: str):

    with open(path, "r", encoding="utf-8") as f:
        text = f.read()

    return text, 1