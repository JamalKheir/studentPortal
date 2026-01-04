import "bootstrap/dist/css/bootstrap.min.css";
import { Bell } from "lucide-react";
const Announcement = () => {
    const announcements = [
    { id: 1, title: 'Database Exam Postponed', course: 'Database Systems', date: '2024-11-20', content: 'The midterm exam has been rescheduled to next Sunday at 10:00 AM. Please review chapters 5-8.' },
    { id: 2, title: 'Extra Lecture This Week', course: 'Software Engineering', date: '2024-11-19', content: 'Additional review session scheduled for Thursday at 2:00 PM in Room B105.' },
    { id: 3, title: 'Project Deadline Extended', course: 'Artificial Intelligence', date: '2024-11-18', content: 'Final project submission deadline extended to November 30th. Submit via online portal.' },
    { id: 4, title: 'Guest Speaker Workshop', course: 'General', date: '2024-11-17', content: 'Industry expert workshop on modern app development this Saturday in the main lab.' }
  ];
    return (
        <div className="bg-white rounded-4 p-4 shadow">
            <h3 className="fs-4 fw-bold mb-4 d-flex align-items-center">
                <Bell className="me-2 text-danger" style={{ width: "24px", height: "24px" }} />
                Recent Announcements
            </h3>

            <div className="d-flex flex-column gap-3">
                {announcements.slice(0, 3).map((announcement) => (
                    <div
                        key={announcement.id}
                        className="p-3 border-start border-4 border-danger bg-light rounded-end hover-shadow transition"
                        style={{ backgroundColor: "#ffe6ef" }} 
                    >
                        <h4 className="fw-semibold text-dark mb-1">
                            {announcement.title}
                        </h4>

                        <p className="small text-muted mb-2">
                            {announcement.content.slice(0, 60)}...
                        </p>

                        <span className="text-secondary small">{announcement.date}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Announcement;