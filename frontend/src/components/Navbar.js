import "bootstrap/dist/css/bootstrap.min.css";
import {X,Menu,LogOut} from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = ({sidebarOpen,setSidebarOpen}) => {
    return (
        <nav className="bg-white shadow sticky-top" style={{ zIndex: 50 }}>
            <div className="container py-3">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                       <div>
                         <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="btn p-2 rounded SidebarPC"
                            style={{
                                backgroundColor: "transparent",
                                transition: "background-color 0.2s",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f3f4f6")} 
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                        >
                            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>   
                       </div>

                        <div>
                            <h1 className="fs-4 fw-bold text-dark mb-0">Student Portal</h1>
                            <p className="text-muted small mb-0">Academic Management System</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-3">

                        <Link
                            to="/"
                            className="btn btn-danger d-flex align-items-center gap-2 shadow"
                            style={{ padding: "0.5rem 1rem" }}
                        >
                            <LogOut style={{ width: 20, height: 20 }} />
                            <span className="d-none d-md-inline">Logout</span>
                        </Link>

                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;