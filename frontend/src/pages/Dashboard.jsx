import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";

export default function Dashboard() {
    const [stats, setStats] = useState({
        documents: 35,
        questions: 245,
        conversations: 67,
        storage: "420 MB",
        uploadsToday: 5,
        aiResponses: 198,
        responseTime: "1.8 sec",
        activeUsers: 12
    });

    const recentDocuments = [
        {
            id: 1,
            name: "Machine Learning.pdf",
            type: "PDF",
            date: "Today"
        },
        {
            id: 2,
            name: "FastAPI Guide.docx",
            type: "DOCX",
            date: "Yesterday"
        },
        {
            id: 3,
            name: "React Notes.pdf",
            type: "PDF",
            date: "2 days ago"
        },
        {
            id: 4,
            name: "Python Basics.txt",
            type: "TXT",
            date: "3 days ago"
        }
    ];

    const recentQuestions = [
        {
            id: 1,
            question: "Explain JWT Authentication",
            time: "2 mins ago"
        },
        {
            id: 2,
            question: "Summarize AI.pdf",
            time: "15 mins ago"
        },
        {
            id: 3,
            question: "Explain FastAPI",
            time: "40 mins ago"
        },
        {
            id: 4,
            question: "Difference between LLM and NLP",
            time: "1 hour ago"
        }
    ];

    const health = [
        {
            service: "Gemini API",
            status: "Online"
        },
        {
            service: "Embedding Service",
            status: "Healthy"
        },
        {
            service: "MySQL Database",
            status: "Connected"
        },
        {
            service: "Vector Database",
            status: "Ready"
        }
    ];

    useEffect(() => {
        // Later connect Dashboard API here
    }, []);

    return (
        <MainLayout>

            <div className="page-header">
                <h1>Dashboard</h1>
                <p>
                    Welcome to your AI Knowledge Assistant
                </p>
            </div>

            {/* Top Cards */}

            <div className="dashboard-grid">

                <div className="card stat-card">
                    <h3>Documents</h3>
                    <h1>{stats.documents}</h1>
                    <p>Total Uploaded Files</p>
                </div>

                <div className="card stat-card">
                    <h3>Questions</h3>
                    <h1>{stats.questions}</h1>
                    <p>Total Questions Asked</p>
                </div>

                <div className="card stat-card">
                    <h3>Conversations</h3>
                    <h1>{stats.conversations}</h1>
                    <p>Chat Sessions</p>
                </div>

                <div className="card stat-card">
                    <h3>Storage</h3>
                    <h1>{stats.storage}</h1>
                    <p>Documents Storage</p>
                </div>

            </div>

            {/* AI Statistics */}

            <div className="dashboard-row">

                <div className="card">

                    <h2>Today's AI Activity</h2>

                    <table className="table">

                        <tbody>

                            <tr>
                                <td>Documents Uploaded</td>
                                <td>{stats.uploadsToday}</td>
                            </tr>

                            <tr>
                                <td>Questions Answered</td>
                                <td>{stats.aiResponses}</td>
                            </tr>

                            <tr>
                                <td>Average Response Time</td>
                                <td>{stats.responseTime}</td>
                            </tr>

                            <tr>
                                <td>Active Users</td>
                                <td>{stats.activeUsers}</td>
                            </tr>

                        </tbody>

                    </table>

                </div>

                <div className="card">

                    <h2>System Health</h2>

                    <table className="table">

                        <thead>

                            <tr>
                                <th>Service</th>
                                <th>Status</th>
                            </tr>

                        </thead>

                        <tbody>

                            {health.map((item) => (

                                <tr key={item.service}>

                                    <td>{item.service}</td>

                                    <td>

                                        <span className="status success">
                                            {item.status}
                                        </span>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

            {/* Bottom */}

            <div className="dashboard-row">

                <div className="card">

                    <h2>Recent Documents</h2>

                    <table className="table">

                        <thead>

                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Uploaded</th>
                            </tr>

                        </thead>

                        <tbody>

                            {recentDocuments.map((doc) => (

                                <tr key={doc.id}>

                                    <td>{doc.name}</td>

                                    <td>{doc.type}</td>

                                    <td>{doc.date}</td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

                <div className="card">

                    <h2>Recent Questions</h2>

                    <table className="table">

                        <thead>

                            <tr>
                                <th>Question</th>
                                <th>Time</th>
                            </tr>

                        </thead>

                        <tbody>

                            {recentQuestions.map((q) => (

                                <tr key={q.id}>

                                    <td>{q.question}</td>

                                    <td>{q.time}</td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </MainLayout>
    );
}