import "bootstrap/dist/css/bootstrap.min.css";
import { Clock,Bell } from "lucide-react";
const AllAnnouncements = () => {
    const announcements = [
    { id: 1, title: 'Database Exam Postponed', course: 'Database Systems', date: '2024-11-20', content: 'The midterm exam has been rescheduled to next Sunday at 10:00 AM. Please review chapters 5-8.' },
    { id: 2, title: 'Extra Lecture This Week', course: 'Software Engineering', date: '2024-11-19', content: 'Additional review session scheduled for Thursday at 2:00 PM in Room B105.' },
    { id: 3, title: 'Project Deadline Extended', course: 'Artificial Intelligence', date: '2024-11-18', content: 'Final project submission deadline extended to November 30th. Submit via online portal.' },
    { id: 4, title: 'Guest Speaker Workshop', course: 'General', date: '2024-11-17', content: 'Industry expert workshop on modern app development this Saturday in the main lab.' }
  ];
    return (
        <div className="d-flex flex-column gap-4">
            {announcements.map(announcement => (
                <div
                    key={announcement.id}
                    className="bg-white rounded-4 shadow p-4 border-start border-4"
                    style={{
                        borderColor: "#3b5998",           
                        transition: "0.3s",
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
                        e.currentTarget.style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.boxShadow = "";
                        e.currentTarget.style.transform = "";
                    }}
                >
                    <div className="d-flex align-items-start justify-content-between mb-3">

                        <div className="flex-grow-1">
                            <div className="d-flex align-items-center gap-2 mb-2">
                                <h3 className="fs-4 fw-bold text-dark mb-0">{announcement.title}</h3>
                            </div>

                            <div className="d-flex align-items-center gap-3 small">
                                <span
                                    className="px-3 py-1 rounded-pill fw-semibold"
                                    style={{ backgroundColor: "#3b5998", color: "white" }}
                                >
                                    {announcement.course}
                                </span>

                                <span className="text-muted d-flex align-items-center gap-1">
                                    <Clock style={{ width: "16px", height: "16px" }} />
                                    {announcement.date}
                                </span>
                            </div>
                        </div>

                        <Bell
                            className="text-danger"
                            style={{ width: "24px", height: "24px", color: "#ec4899" }} // pink-500
                        />
                    </div>

                    <p className="text-muted" style={{ lineHeight: "1.6" }}>
                        {announcement.content}
                    </p>
                </div>
            ))}
        </div>
    )
}
export default AllAnnouncements;