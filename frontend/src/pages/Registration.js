import "bootstrap/dist/css/bootstrap.min.css";
import { Plus } from "lucide-react";
import Register from "../components/Register";
const Registration = () => {
    return (
        <div className="d-flex flex-column gap-4 p-4">
            <div
                className="rounded-4 p-4 text-white"
                style={{ background: '#3b5998' }}
            >
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <h2 className="fs-3 fw-bold mb-2">Course Registration</h2>
                        <p className="text-white-50 mb-0">Select courses to add to your schedule</p>
                    </div>
                    <Plus className="opacity-75" style={{ width: "64px", height: "64px" }} />
                </div>
            </div>
            <div className="bg-white rounded-4 p-4 shadow mb-4 ">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="fs-5 fw-bold mb-0">Current Registration Status</h3>
                </div>
                <div className="row gap-3">
                    <div className="col text-center p-3 rounded-3" style={{ backgroundColor: "#EEF2FF" }}>
                        <p className="small text-muted mb-1">Enrolled Credits</p>
                        <p className="fs-2 fw-bold text-primary">
                            10
                        </p>
                    </div>
                    <div className="col text-center p-3 rounded-3" style={{ backgroundColor: "#F5F3FF" }}>
                        <p className="small text-muted mb-1">Available Courses</p>
                        <p className="fs-2 fw-bold" style={{ color: "#7C3AED" }}>
                            6
                        </p>
                    </div>
                    <div className="col text-center p-3 rounded-3" style={{ backgroundColor: "#ECFDF5" }}>
                        <p className="small text-muted mb-1">Max Credits</p>
                        <p className="fs-2 fw-bold text-success">18</p>
                    </div>
                </div>
            </div>
            <Register/>
        </div>
    )
}
export default Registration