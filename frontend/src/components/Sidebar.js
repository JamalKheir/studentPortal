import "bootstrap/dist/css/bootstrap.min.css";
import { LayoutDashboard, BookOpen, Award, Bell, Plus } from "lucide-react";
import { Link } from "react-router-dom"
import "../assets/style/Responsive.css";

const Sidebar = ({ setActiveTab, activeTab, sidebarOpen }) => {
    return (
        <div
            className="SidebarPC"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                height: "100vh",
                width: sidebarOpen ? "280px" : "0px",
                background: "#3b5998",
                overflow: "hidden",
                transition: "0.3s",
                color: "white",
                zIndex: 1000,
            }}
        >
            <div
                style={{
                    opacity: sidebarOpen ? 1 : 0,
                    transition: "opacity 0.3s",
                    padding: "20px",
                }}
            >
                <h1 className="fs-4 fw-bold mb-4">Smart University Portal</h1>

                <nav className="d-flex flex-column gap-2">
                    {[
                        { name: "Dashboard", icon: <LayoutDashboard />, id: "dashboard" },
                        { name: "Registration", icon: <Plus />, id: "Registration" },
                        { name: "Courses", icon: <BookOpen />, id: "Courses" },
                        { name: "Grades", icon: <Award />, id: "Grades" },
                        { name: "Announcements", icon: <Bell />, id: "Announcements" },
                    ].map((item) => (
                        <Link
                            key={item.id}
                            to={`/${item.id}`}
                            onClick={() => setActiveTab(item.id)}
                            className="btn text-start w-100 py-2 px-3 text-white"
                            style={{
                                background:
                                    activeTab === item.id ? "rgba(0,0,0,0.25)" : "transparent",
                                borderRadius: "8px",
                                transition: "0.2s",
                            }}
                        >
                            <span className="me-2">{item.icon}</span>
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;