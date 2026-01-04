import "bootstrap/dist/css/bootstrap.min.css";
import { Clock,User,Calendar,Plus,CheckCircle } from "lucide-react";
import { useState } from "react";
const Register = () => {
    const [showAddModal, setShowAddModal] = useState(false);
    const [selectedCourseToAdd, setSelectedCourseToAdd] = useState(null);
    const [availableCourses] = useState([
        { id: 5, name: 'Data Structures', code: 'CS201', instructor: 'Dr. James Wilson', schedule: 'Mon/Wed 9:00 AM', room: 'B202', credits: 3, seats: 25, maxSeats: 30, prerequisites: 'CS101' },
        { id: 6, name: 'Computer Networks', code: 'CS305', instructor: 'Dr. Lisa Brown', schedule: 'Tue/Thu 1:00 PM', room: 'C102', credits: 3, seats: 15, maxSeats: 25, prerequisites: 'CS201' },
        { id: 7, name: 'Operating Systems', code: 'CS306', instructor: 'Dr. Mark Taylor', schedule: 'Mon/Wed 11:00 AM', room: 'A301', credits: 4, seats: 20, maxSeats: 30, prerequisites: 'CS201' },
        { id: 8, name: 'Web Development', code: 'CS307', instructor: 'Dr. Anna Martinez', schedule: 'Tue/Thu 3:00 PM', room: 'B301', credits: 3, seats: 10, maxSeats: 20, prerequisites: 'None' },
        { id: 9, name: 'Mobile App Development', code: 'CS308', instructor: 'Dr. David Lee', schedule: 'Mon/Wed 4:00 PM', room: 'C201', credits: 3, seats: 18, maxSeats: 25, prerequisites: 'CS302' },
        { id: 10, name: 'Machine Learning', code: 'CS309', instructor: 'Dr. Jennifer Kim', schedule: 'Tue/Thu 2:00 PM', room: 'A402', credits: 4, seats: 12, maxSeats: 20, prerequisites: 'CS303' }
    ]);
    const [courses, setCourses] = useState([
        { id: 1, name: 'Database Systems', code: 'CS301', instructor: 'Dr. Michael Anderson', schedule: 'Mon/Wed 10:00 AM', room: 'A201', progress: 75, credits: 3 },
        { id: 2, name: 'Software Engineering', code: 'CS302', instructor: 'Dr. Sarah Johnson', schedule: 'Tue/Thu 12:00 PM', room: 'B105', progress: 60, credits: 3 },
        { id: 3, name: 'Artificial Intelligence', code: 'CS303', instructor: 'Dr. Robert Chen', schedule: 'Mon/Wed 2:00 PM', room: 'C301', progress: 85, credits: 4 },
        { id: 4, name: 'Information Security', code: 'CS304', instructor: 'Dr. Emily Davis', schedule: 'Tue/Thu 10:00 AM', room: 'A105', progress: 70, credits: 3 }
    ]);
    const enrolledCourseIds = courses.map(c => c.id);
    const handleAddCourse = (course) => {
        setSelectedCourseToAdd(course);
        setShowAddModal(true);
    };

    const confirmAddCourse = () => {
        if (selectedCourseToAdd) {
            const newCourse = {
                ...selectedCourseToAdd,
                progress: 0
            };
            setCourses([...courses, newCourse]);
            setShowAddModal(false);
            setSelectedCourseToAdd(null);
        }
    };

    const cancelAddCourse = () => {
        setShowAddModal(false);
        setSelectedCourseToAdd(null);
    };

    const isAlreadyEnrolled = (courseId) => {
        return courses.some(course => course.id === courseId)
    }
    return (
        <div className="mb-4">
            <h3 className="fs-5 fw-bold mb-3">Available Courses</h3>

            {availableCourses.filter(c => !enrolledCourseIds.includes(c.id)).length === 0 ? (
                <div className="bg-white rounded-4 p-5 text-center shadow">
                    <CheckCircle className="text-success mb-3" style={{ width: "64px", height: "64px" }} />
                    <h3 className="fs-5 fw-semibold text-secondary mb-2">All Available Courses Enrolled</h3>
                    <p className="text-secondary">You have enrolled in all available courses.</p>
                </div>
            ) : (
                <div className="row g-4">
                    {availableCourses.map(course => {
                        const alreadyEnrolled = isAlreadyEnrolled(course.id);
                        const seatsFull = course.seats >= course.maxSeats;
                        const currentCredits = courses.reduce((sum, c) => sum + c.credits, 0);
                        const wouldExceedMax = currentCredits + course.credits > 18;

                        let borderClass = "border border-light";
                        let headerBg = '#3b5998' ; 
                        let headerTextColor = "white";

                        if (alreadyEnrolled) {
                            borderClass = "border border-light";
                            headerBg = '#3b5998' ; 
                            headerTextColor = "white";
                        } else if (seatsFull || wouldExceedMax) {
                            borderClass = "border border-danger opacity-50";
                        }

                        return (
                            <div key={course.id} className={`col - 12 col-lg-6`}>
                                <div className={`bg - white rounded-4 shadow overflow-hidden ${borderClass}`}>
                                    <div className="p-4 text-white" style={{ background: headerBg, color: headerTextColor }}>
                                        <div className="d-flex justify-content-between mb-3">
                                            <span className="px-3 py-1 rounded-pill small fw-semibold bg-white-25">
                                                {course.code}
                                            </span>
                                            <span className="px-3 py-1 rounded-pill small bg-white-25">
                                                {course.credits} Credits
                                            </span>
                                        </div>
                                        <h3 className="fs-5 fw-bold mb-2">{course.name}</h3>
                                        {alreadyEnrolled && (
                                            <div className="d-flex align-items-center gap-2 text-white">
                                                <CheckCircle style={{ width: "20px", height: "20px" }} />
                                                <span className="small fw-semibold">Already Enrolled</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-4 d-flex flex-column gap-3">
                                        <div className="d-flex align-items-center gap-2">
                                            <User className="text-secondary" style={{ width: "20px", height: "20px" }} />
                                            <div>
                                                <p className="small text-muted mb-0">Instructor</p>
                                                <p className="fw-semibold mb-0">{course.instructor}</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <Clock className="text-secondary" style={{ width: "20px", height: "20px" }} />
                                            <div>
                                                <p className="small text-muted mb-0">Schedule</p>
                                                <p className="fw-semibold mb-0">{course.schedule}</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <Calendar className="text-secondary" style={{ width: "20px", height: "20px" }} />
                                            <div>
                                                <p className="small text-muted mb-0">Room</p>
                                                <p className="fw-semibold mb-0">{course.room}</p>
                                            </div>
                                        </div>
                                        <div className="p-3 rounded-3" style={{ backgroundColor: "#F3F4F6" }}>
                                            <div className="d-flex justify-content-between mb-1">
                                                <span className="small text-muted">Available Seats</span>
                                                <span className={`fw - bold${seatsFull ? "text-danger" : "text-success"}`}>
                                                    {course.maxSeats - course.seats} / {course.maxSeats}
                                                </span>
                                            </div>
                                            <div className="progress" style={{ height: "8px" }}>
                                                <div
                                                    className={`progress - bar${seatsFull ? "bg-danger" : "bg-success"}`}
                                                    role="progressbar"
                                                    style={{ width: `${(course.seats / course.maxSeats) * 100}%` }}
                                                />
                                            </div>
                                        </div>
                                        <div className="p-3 rounded-3" style={{ backgroundColor: "#EFF6FF" }}>
                                            <p className="small text-muted mb-1">Prerequisites</p>
                                            <p className="small fw-semibold text-primary mb-0">{course.prerequisites}</p>
                                        </div>

                                        {alreadyEnrolled ? (
                                            <button className="btn btn-success w-100" disabled>
                                                <CheckCircle className="me-2" style={{ width: "20px", height: "20px" }} />
                                                Enrolled
                                            </button>
                                        ) : seatsFull ? (
                                            <button className="btn btn-danger w-100" disabled>
                                                Course Full
                                            </button>
                                        ) : wouldExceedMax ? (
                                            <button className="btn btn-warning w-100" disabled>
                                                Credit Limit Exceeded
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => handleAddCourse(course)}
                                                className="btn w-100 text-white"
                                                style={{ background: '#3b5998'  }}
                                            >
                                                <Plus className="me-2" style={{ width: "20px", height: "20px" }} />
                                                Add Course
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div >
                        );
                    })}
                </div >
            )}
            {showAddModal && selectedCourseToAdd && (
                <div className="modal fade show" style={{ display: "block", background: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">

                            <div className="modal-header" style={{ background: '#3b5998' , color: "white" }}>
                                <h5 className="modal-title">Add Course</h5>
                                <button type="button" className="btn-close" onClick={cancelAddCourse}></button>
                            </div>

                            <div className="modal-body text-center">
                                <p>Confirm adding this course to your schedule?</p>
                                <div className="bg-light rounded-3 p-3 mb-3">
                                    <p className="fw-bold mb-1">{selectedCourseToAdd.name}</p>
                                    <p className="small mb-1">{selectedCourseToAdd.code} • {selectedCourseToAdd.credits} Credits</p>
                                    <p className="small mb-0">{selectedCourseToAdd.schedule}</p>
                                </div>
                                <div className="alert alert-info mb-3" role="alert">
                                    After adding, you will be officially enrolled in this course.
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={cancelAddCourse}>Cancel</button>
                                <button className="btn btn-success" onClick={confirmAddCourse}>Confirm</button>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div >
    )
}
export default Register;