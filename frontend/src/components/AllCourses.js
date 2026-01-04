import "bootstrap/dist/css/bootstrap.min.css";
import { BookOpen, User, Clock, Calendar, Trash2 } from "lucide-react";
import { useState } from "react";
const AllCourses = () => {
    const [courseToDropId, setCourseToDropId] = useState(null);
    const [showDropModal, setShowDropModal] = useState(false);
    const [courses, setCourses] = useState([
        { id: 1, name: 'Database Systems', code: 'CS301', instructor: 'Dr. Michael Anderson', schedule: 'Mon/Wed 10:00 AM', room: 'A201', progress: 75, credits: 3 },
        { id: 2, name: 'Software Engineering', code: 'CS302', instructor: 'Dr. Sarah Johnson', schedule: 'Tue/Thu 12:00 PM', room: 'B105', progress: 60, credits: 3 },
        { id: 3, name: 'Artificial Intelligence', code: 'CS303', instructor: 'Dr. Robert Chen', schedule: 'Mon/Wed 2:00 PM', room: 'C301', progress: 85, credits: 4 },
        { id: 4, name: 'Information Security', code: 'CS304', instructor: 'Dr. Emily Davis', schedule: 'Tue/Thu 10:00 AM', room: 'A105', progress: 70, credits: 3 }
    ]);
    const handleDropCourse = (courseId) => {
        setCourseToDropId(courseId);
        setShowDropModal(true);
    };

    const confirmDropCourse = () => {
        setCourses(courses.filter(course => course.id !== courseToDropId));
        setShowDropModal(false);
        setCourseToDropId(null);
    };

    const cancelDropCourse = () => {
        setShowDropModal(false);
        setCourseToDropId(null);
    };
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            {courses.map(course => (
                <div key={course.id} className="col">
                    <div
                        className="bg-white rounded-4 shadow border border-light overflow-hidden"
                        style={{ transition: "0.25s" }}
                    >
                        <div
                            className="p-4 text-white"
                            style={{ background: '#3b5998' }}
                        >
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <span
                                    className="px-3 py-1 rounded-pill small fw-semibold"
                                    style={{ background: "rgba(255,255,255,0.2)" }}
                                >
                                    {course.code}
                                </span>

                                <span
                                    className="px-3 py-1 rounded-pill small"
                                    style={{ background: "rgba(255,255,255,0.2)" }}
                                >
                                    {course.credits} Credits
                                </span>
                            </div>

                            <h3 className="fs-4 fw-bold mb-2">{course.name}</h3>
                            <BookOpen className="opacity-75" style={{ width: "24px", height: "24px" }} />
                        </div>
                        <div className="p-4 d-flex flex-column gap-4">
                            <div className="d-flex align-items-center gap-3">
                                <User className="text-secondary" style={{ width: "20px", height: "20px" }} />
                                <div>
                                    <p className="small text-muted mb-0">Instructor</p>
                                    <p className="fw-semibold text-dark mb-0">{course.instructor}</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <Clock className="text-secondary" style={{ width: "20px", height: "20px" }} />
                                <div>
                                    <p className="small text-muted mb-0">Schedule</p>
                                    <p className="fw-semibold text-dark mb-0">{course.schedule}</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <Calendar className="text-secondary" style={{ width: "20px", height: "20px" }} />
                                <div>
                                    <p className="small text-muted mb-0">Room</p>
                                    <p className="fw-semibold text-dark mb-0">{course.room}</p>
                                </div>
                            </div>

                            <div>
                                <div className="d-flex justify-content-between small mb-2">
                                    <span className="fw-semibold" style={{ color: "#4F46E5" }}>{course.progress}%</span>
                                    <span className="text-muted">Course Progress</span>
                                </div>

                                <div className="w-100 bg-light rounded-pill" style={{ height: "10px" }}>
                                    <div
                                        className="rounded-pill"
                                        style={{
                                            height: "10px",
                                            width: `${course.progress}%`,
                                            background: '#3b5998',
                                            transition: "0.4s"
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <div className="d-flex gap-2">
                                <button
                                    className="flex-fill btn fw-semibold"
                                    style={{
                                        background: "#EEF2FF",
                                        color: "#4F46E5"
                                    }}
                                >
                                    View Details
                                </button>

                                <button
                                    onClick={() => handleDropCourse(course.id)}
                                    className="d-flex align-items-center justify-content-center gap-2 px-4 btn fw-semibold"
                                    style={{ background: "#FEE2E2", color: "#DC2626" }}
                                >
                                    <Trash2 style={{ width: "16px", height: "16px" }} />
                                    Drop
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            ))
            }
            <div className="text-center w-100">
                {courses.length === 0 && (
                    <div className="bg-white rounded-4 p-5 text-center shadow">
                        <BookOpen
                            className="text-secondary mx-auto mb-3"
                            style={{ width: "64px", height: "64px" }}
                        />
                        <h3 className="fs-5 fw-semibold text-secondary mb-2">No Courses Enrolled</h3>
                        <p className="text-secondary">You haven't enrolled in any courses yet.</p>
                    </div>
                )}
            </div>
            {showDropModal && (
                <div className="modal fade show" style={{ display: "block", background: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h5 className="modal-title">Confirm Drop Course</h5>
                                <button
                                    className="btn-close"
                                    onClick={cancelDropCourse}
                                ></button>
                            </div>

                            <div className="modal-body">
                                Are you sure you want to drop this course?
                            </div>

                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={cancelDropCourse}>
                                    Cancel
                                </button>

                                <button className="btn btn-danger" onClick={confirmDropCourse}>
                                    Drop
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div >
    )
}
export default AllCourses;