import { useState } from "react";
import MainLayout from "../layouts/MainLayout";

export default function Documents() {

    const [search, setSearch] = useState("");

    const [filter, setFilter] = useState("All");

    const [documents] = useState([
        {
            id: 1,
            filename: "Machine Learning.pdf",
            type: "PDF",
            size: "5.8 MB",
            uploaded: "Today",
            status: "Indexed"
        },
        {
            id: 2,
            filename: "Python Notes.docx",
            type: "DOCX",
            size: "1.4 MB",
            uploaded: "Yesterday",
            status: "Indexed"
        },
        {
            id: 3,
            filename: "React Guide.pdf",
            type: "PDF",
            size: "8.2 MB",
            uploaded: "2 Days Ago",
            status: "Processing"
        },
        {
            id: 4,
            filename: "FastAPI.txt",
            type: "TXT",
            size: "500 KB",
            uploaded: "Last Week",
            status: "Indexed"
        }
    ]);

    const filteredDocuments = documents.filter((doc) => {

        const matchSearch =
            doc.filename.toLowerCase().includes(search.toLowerCase());

        const matchFilter =
            filter === "All" || doc.type === filter;

        return matchSearch && matchFilter;
    });

    return (

        <MainLayout>

            <div className="page-header">

                <h1>Documents</h1>

                <p>
                    Upload, manage and search your knowledge base.
                </p>

            </div>

            {/* Statistics */}

            <div className="dashboard-grid">

                <div className="card stat-card">
                    <h3>Total Documents</h3>
                    <h1>35</h1>
                </div>

                <div className="card stat-card">
                    <h3>Indexed</h3>
                    <h1>32</h1>
                </div>

                <div className="card stat-card">
                    <h3>Processing</h3>
                    <h1>3</h1>
                </div>

                <div className="card stat-card">
                    <h3>Storage Used</h3>
                    <h1>420 MB</h1>
                </div>

            </div>

            {/* Upload Section */}

            <div className="upload-card">

    <div className="upload-header">

        <div>
            <h2>Upload Documents</h2>
            <p>
                Upload PDF, DOCX or TXT files to build your knowledge base.
            </p>
        </div>

        <button className="primary-btn">
            Upload Files
        </button>

    </div>

    <div className="upload-drop">

        <div className="upload-icon">
            📄
        </div>

        <h3>Drag & Drop Files Here</h3>

        <p>
            PDF, DOCX, TXT • Maximum 20 MB
        </p>

        <label className="browse-btn">

            Browse Files

            <input
                type="file"
                multiple
                hidden
            />

        </label>

    </div>

</div>

<div className="search-toolbar">

    <input
        type="text"
        placeholder="Search documents..."
    />

    <select>

        <option>All Types</option>

        <option>PDF</option>

        <option>DOCX</option>

        <option>TXT</option>

    </select>

</div>

            {/* Search */}

            <div className="card">

                <div className="toolbar">

                    <input

                        type="text"

                        placeholder="Search documents..."

                        value={search}

                        onChange={(e) =>
                            setSearch(e.target.value)
                        }

                    />

                    <select

                        value={filter}

                        onChange={(e) =>
                            setFilter(e.target.value)
                        }

                    >

                        <option>All</option>

                        <option>PDF</option>

                        <option>DOCX</option>

                        <option>TXT</option>

                    </select>

                </div>

            </div>

            {/* Table */}

            <div className="card">

                <h2>Document Library</h2>

                <table className="table">

                    <thead>

                        <tr>

                            <th>Filename</th>

                            <th>Type</th>

                            <th>Size</th>

                            <th>Uploaded</th>

                            <th>Status</th>

                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        {filteredDocuments.map((doc) => (

                            <tr key={doc.id}>

                                <td>{doc.filename}</td>

                                <td>{doc.type}</td>

                                <td>{doc.size}</td>

                                <td>{doc.uploaded}</td>

                                <td>

                                    <span
                                        className={
                                            doc.status === "Indexed"
                                                ? "status success"
                                                : "status warning"
                                        }
                                    >

                                        {doc.status}

                                    </span>

                                </td>

                                <td>
    <div className="action-buttons">

        <button className="btn-view">
            👁 View
        </button>

        <button className="btn-download">
            ⬇ Download
        </button>

        <button className="btn-delete">
            🗑 Delete
        </button>

    </div>
</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

            {/* Summary */}

            <div className="dashboard-row">

                <div className="card">

                    <h2>Storage Summary</h2>

                    <table className="table">

                        <tbody>

                            <tr>

                                <td>Total Files</td>

                                <td>35</td>

                            </tr>

                            <tr>

                                <td>PDF Files</td>

                                <td>22</td>

                            </tr>

                            <tr>

                                <td>DOCX Files</td>

                                <td>8</td>

                            </tr>

                            <tr>

                                <td>TXT Files</td>

                                <td>5</td>

                            </tr>

                            <tr>

                                <td>Storage Used</td>

                                <td>420 MB</td>

                            </tr>

                        </tbody>

                    </table>

                </div>

                

            </div>

        </MainLayout>

    );

}