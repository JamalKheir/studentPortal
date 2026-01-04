import "bootstrap/dist/css/bootstrap.min.css";
import { Calendar,Clock,ChevronRight } from "lucide-react";
const Course = () => {
    const courses = [
    { id: 1, name: 'Database Systems', code: 'CS301', instructor: 'Dr. Michael Anderson', schedule: 'Mon/Wed 10:00 AM', room: 'A201', progress: 75, credits: 3 },
    { id: 2, name: 'Software Engineering', code: 'CS302', instructor: 'Dr. Sarah Johnson', schedule: 'Tue/Thu 12:00 PM', room: 'B105', progress: 60, credits: 3 },
    { id: 3, name: 'Artificial Intelligence', code: 'CS303', instructor: 'Dr. Robert Chen', schedule: 'Mon/Wed 2:00 PM', room: 'C301', progress: 85, credits: 4 },
    { id: 4, name: 'Information Security', code: 'CS304', instructor: 'Dr. Emily Davis', schedule: 'Tue/Thu 10:00 AM', room: 'A105', progress: 70, credits: 3 }
  ];
    return (
        <div className="bg-white rounded-4 p-4 shadow">
            <h3 className="fs-5 fw-bold mb-3 d-flex align-items-center">
                <Calendar style={{ width: 24, height: 24, color: "#4f46e5", marginRight: "0.5rem" }} />
                Today's Schedule
            </h3>

            <div className="d-flex flex-column gap-3">
                {courses.slice(0, 3).map(course => (
                    <div
                        key={course.id}
                        className="d-flex align-items-center justify-content-between p-3 rounded-3 hover-shadow custom-gradient transition"
                    >
                        <div className="d-flex align-items-center gap-3 w-100 bg-white shadow p-2">
                            <div className="d-flex align-items-center justify-content-center  text-white fw-bold rounded-3"
                                style={{ width: "48px", height: "48px" ,background: "#3b5998",}}>
                                {course.code.slice(0, 2)}
                            </div>

                            <div>
                                <p className="fw-semibold mb-1 text-dark">{course.name}</p>
                                <div className="d-flex align-items-center gap-2 text-sm text-muted">
                                    <Clock style={{ width: 16, height: 16 }} />
                                    <span>{course.schedule}</span>
                                </div>
                            </div>
                        </div>

                        <ChevronRight style={{ width: 20, height: 20, color: "#9ca3af" }} />
                    </div>
                ))}
            </div>
        </div>
 
    )
}
export default Course;
