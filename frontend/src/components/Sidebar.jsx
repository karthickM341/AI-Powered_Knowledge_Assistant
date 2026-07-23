import { NavLink, useNavigate } from "react-router-dom";
import {
    FaHome,
    FaFileAlt,
    FaComments,
    FaChartBar,
    FaSignOutAlt
} from "react-icons/fa";

import { useAuth } from "../context/AuthContext";

export default function Sidebar() {

    const navigate = useNavigate();

    const { logout } = useAuth();

    const handleLogout = () => {

        logout();

        navigate("/login");

    };

    return (

        <aside className="sidebar">

            <h2 className="logo">
                AI Assistant
            </h2>

            <nav>

                <NavLink to="/dashboard">
                    <FaHome /> Dashboard
                </NavLink>

                <NavLink to="/documents">
                    <FaFileAlt /> Documents
                </NavLink>

                <NavLink to="/chat">
                    <FaComments /> Chat
                </NavLink>

                <NavLink to="/analytics">
                    <FaChartBar /> Analytics
                </NavLink>

            </nav>

            <button
                className="logout-btn"
                onClick={handleLogout}
            >
            
                Logout
            </button>

        </aside>

    );
}