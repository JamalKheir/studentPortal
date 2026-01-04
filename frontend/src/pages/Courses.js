import "bootstrap/dist/css/bootstrap.min.css";
import AllCourses from "../components/AllCourses";
const Courses = () => {
    return (
        <div className="d-flex flex-column gap-4 p-4">
            <div className="d-flex align-items-center justify-content-between">
                <h2 className="fs-2 fw-bold text-dark">My Courses</h2>

                <div className="small text-secondary">
                    Total Credits: 15
                </div>
            </div>
            <AllCourses/>
        </div>
    )
}
export default Courses;