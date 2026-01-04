import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "../assets/images/Profile.png";
import { Award, BookOpen, Bell } from "lucide-react";
import Details from "../components/Details";
import Course from "../components/Course";
import Announcement from "../components/Announcement";
const Dashboard = () => {
    const data = [
        {
            id: 1,
            icon: <Award className="text-primary mb-2" style={{ width: "40px", height: "40px", color: "#4f46e5" }} />,
            name: "Cumulative GPA",
            num: "3.75",
            note: "Out of 4.0"
        },
        {
            id: 2,
            icon: <BookOpen className="text-purple mb-2" style={{ width: "40px", height: "40px", color: "#9333ea" }} />,
            name: "Enrolled Courses",
            num: "4",
            note: "This semester"
        },
        {
            id: 3,
            icon: <Bell className="mb-2" style={{ width: "40px", height: "40px", color: "#db2777" }} />,
            name: "New Announcements",
            num: "4",
            note: "Unread messages"
        }
    ]
    return (
        <div className="d-flex flex-column gap-4 bg-white shadow mt-4" >
            <div className="custom-gradient rounded-4 p-4">
                <div className="d-flex align-items-center justify-content-between">

                    <div>
                        <h2 className="fw-bold mb-2" style={{ fontSize: "1.9rem" }}>
                            Welcome back, Jamal Kheir
                        </h2>

                        <p className="mb-0">
                            Computer Science | 2025 2026
                        </p>

                        <p className=" small mt-1 mb-0" style={{ opacity: 0.8 }}>
                            Student ID: 52231158
                        </p>
                    </div>

                    <img
                        src={Profile}
                        alt="Profile"
                        className="rounded-circle border border-4 border-white shadow-lg"
                        style={{ width: 80, height: 80, objectFit: "cover" }}
                    />

                </div>
            </div>
            <div className="row g-4 m-2">
                {data.map((detail, index) => (
                    <div className="col-12 col-md-4" key={index}>
                        <Details details={detail} />
                    </div>
                ))}
                <Course/>
                <Announcement/>
            </div>
            
        </div>
    )
}
export default Dashboard;