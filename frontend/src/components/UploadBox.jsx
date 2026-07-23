import { useState } from "react";

export default function UploadBox({ onUpload }) {

    const [file, setFile] = useState(null);

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!file) {
            alert("Please choose a file.");
            return;
        }

        onUpload(file);

        setFile(null);

        e.target.reset();
    };

    return (

        <form className="upload-box" onSubmit={handleSubmit}>

            <input
                type="file"
                accept=".pdf,.docx,.txt"
                onChange={(e) => setFile(e.target.files[0])}
            />

            <button type="submit">
                Upload
            </button>

        </form>

    );

}