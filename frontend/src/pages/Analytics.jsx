import MainLayout from "../layouts/MainLayout";

export default function Analytics() {

    const recentActivities = [
        {
            user: "Karthick",
            action: "Uploaded MachineLearning.pdf",
            time: "2 mins ago"
        },
        {
            user: "Rahul",
            action: "Asked 15 questions",
            time: "12 mins ago"
        },
        {
            user: "John",
            action: "Generated AI Summary",
            time: "25 mins ago"
        },
        {
            user: "David",
            action: "Downloaded Python Notes",
            time: "1 hour ago"
        }
    ];

    const topUsers = [
        {
            name: "Karthick",
            chats: 58,
            documents: 14
        },
        {
            name: "Subash",
            chats: 41,
            documents: 10
        },
        {
            name: "Vishnu",
            chats: 29,
            documents: 8
        },
        {
            name: "Nishanth",
            chats: 20,
            documents: 5
        }
    ];

    const popularTopics = [
        "Machine Learning",
        "Python",
        "FastAPI",
        "React",
        "JWT Authentication",
        "Deep Learning",
        "SQL",
        "Artificial Intelligence"
    ];

    return (

        <MainLayout>

            <div className="page-header">

                <h1>Analytics Dashboard</h1>

                <p>

                    Monitor AI usage, document statistics and user activity.

                </p>

            </div>

            {/* KPI Cards */}

            <div className="dashboard-grid">

                <div className="card stat-card">
                    <h3>Total Documents</h3>
                    <h1>35</h1>
                    <p>Uploaded Documents</p>
                </div>

                <div className="card stat-card">
                    <h3>Total Questions</h3>
                    <h1>245</h1>
                    <p>AI Questions</p>
                </div>

                <div className="card stat-card">
                    <h3>Conversations</h3>
                    <h1>67</h1>
                    <p>Total Chat Sessions</p>
                </div>

                <div className="card stat-card">
                    <h3>Active Users</h3>
                    <h1>12</h1>
                    <p>Online Today</p>
                </div>

            </div>

            {/* AI Performance */}

            <div className="dashboard-row">

                <div className="card">

                    <h2>AI Performance</h2>

                    <table className="table">

                        <tbody>

                            <tr>
                                <td>Average Response Time</td>
                                <td>1.6 sec</td>
                            </tr>

                            <tr>
                                <td>AI Accuracy</td>
                                <td>96.8%</td>
                            </tr>

                            <tr>
                                <td>Total Responses</td>
                                <td>18,425</td>
                            </tr>

                            <tr>
                                <td>Gemini Status</td>
                                <td>
                                    <span className="status success">
                                        Online
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <td>Embedding Service</td>
                                <td>
                                    <span className="status success">
                                        Healthy
                                    </span>
                                </td>
                            </tr>

                        </tbody>

                    </table>

                </div>

                <div className="card">

                    <h2>Document Statistics</h2>

                    <table className="table">

                        <tbody>

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
                                <td>Indexed Files</td>
                                <td>32</td>
                            </tr>

                            <tr>
                                <td>Processing</td>
                                <td>3</td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

            {/* Most Active Users */}

            <div className="card">

                <h2>Most Active Users</h2>

                <table className="table">

                    <thead>

                        <tr>

                            <th>User</th>

                            <th>Total Chats</th>

                            <th>Documents</th>

                        </tr>

                    </thead>

                    <tbody>

                        {topUsers.map((user, index) => (

                            <tr key={index}>

                                <td>{user.name}</td>

                                <td>{user.chats}</td>

                                <td>{user.documents}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

            {/* Recent Activity */}

            <div className="card">

                <h2>Recent Activities</h2>

                <table className="table">

                    <thead>

                        <tr>

                            <th>User</th>

                            <th>Activity</th>

                            <th>Time</th>

                        </tr>

                    </thead>

                    <tbody>

                        {recentActivities.map((item, index) => (

                            <tr key={index}>

                                <td>{item.user}</td>

                                <td>{item.action}</td>

                                <td>{item.time}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

            {/* Bottom */}

            <div className="dashboard-row">

                <div className="card">

                    <h2>Popular Topics</h2>

                    <ul>

                        {popularTopics.map((topic, index) => (

                            <li key={index}>

                                {topic}

                            </li>

                        ))}

                    </ul>

                </div>

                <div className="card">

                    <h2>Storage Usage</h2>

                    <table className="table">

                        <tbody>

                            <tr>

                                <td>Total Storage</td>

                                <td>500 MB</td>

                            </tr>

                            <tr>

                                <td>Used</td>

                                <td>420 MB</td>

                            </tr>

                            <tr>

                                <td>Available</td>

                                <td>80 MB</td>

                            </tr>

                            <tr>

                                <td>Usage</td>

                                <td>84%</td>

                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

        </MainLayout>

    );

}