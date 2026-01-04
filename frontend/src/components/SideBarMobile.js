import "bootstrap/dist/css/bootstrap.min.css";
import { LayoutDashboard, BookOpen, Award, Bell, Plus } from "lucide-react";
import "../assets/style/Responsive.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const SideBarMobile = () => {
      const [currentPage, setCurrentPage] = useState('dashboard')
    return (
        <aside className="sidebar-mobile">
            <nav
                className="bg-white rounded-4 shadow-lg p-3 position-sticky"
                style={{ top: "6rem" }}
            >
                {[
                    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
                    { id: 'registration', label: 'Registration', icon: Plus },
                    { id: 'courses', label: 'Courses', icon: BookOpen },
                    { id: 'grades', label: 'Grades', icon: Award },
                    { id: 'announcements', label: 'Announcements', icon: Bell }
                ].map(item => (

                    <Link
                        key={item.id}
                        to={`/${item.id}`}
                        onClick={() => setCurrentPage(item.id)}
                        className={`w - 100 d-flex align-items-center gap-3 px-3 py-3 rounded-3 mb-2 fw-semibold border-0 text-start transition-all`}
                        style={{
                            background: currentPage === item.id
                                ? '#3b5998'
                                : "transparent",
                            color: currentPage === item.id ? "white" : "#374151",
                            boxShadow: currentPage === item.id ? "0 4px 10px rgba(0,0,0,0.15)" : "none",
                            transform: currentPage === item.id ? "scale(1.03)" : "scale(1)",
                            transition: "all 0.2s ease-in-out"
                        }}
                        onMouseEnter={(e) => {
                            if (currentPage !== item.id) {
                                e.currentTarget.style.background = "#eef2ff";
                                e.currentTarget.style.transform = "scale(1.02)";
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (currentPage !== item.id) {
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.transform = "scale(1)";
                            }
                        }}
                    >
                        <item.icon style={{ width: "20px", height: "20px" }} />
                        {item.label}
                    </Link>
                ))}
            </nav>
        </aside>
    )
}
export default SideBarMobile;