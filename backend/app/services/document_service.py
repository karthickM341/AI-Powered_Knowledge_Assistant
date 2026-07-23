import os
import shutil
import uuid

UPLOAD_FOLDER = "app/uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


def save_file(file):

    extension = file.filename.split(".")[-1]

    filename = f"{uuid.uuid4()}.{extension}"

    path = os.path.join(
        UPLOAD_FOLDER,
        filename
    )

    with open(path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return filename, path