import "bootstrap/dist/css/bootstrap.min.css";
import TableGrades from "../components/TableGrades";
import { Award, BookOpen, TrendingUp } from "lucide-react";
const Grades = () => {
    return (
        <div className="d-flex flex-column gap-4 p-4">
            <h2 class="fs-1 fw-bold text-dark">Grades & Performance</h2>

            <div class="p-4 rounded-4 text-white shadow-lg"
                style={{ background: '#3b5998' }}>
                <div class="d-flex justify-content-between align-items-center text-center">
                    <div class="px-3">
                        <Award className="d-block mx-auto mb-2 opacity-75"
                            style={{ width: "48px", height: "48px" }} />
                        <p class="small opacity-75 mb-1">Semester GPA</p>
                        <p class="display-4 fw-bold">3.85</p>
                    </div>

                    <div class="vr mx-3 opacity-50" style={{ height: "80px" }}></div>
                    <div class="px-3">
                        <TrendingUp className="d-block mx-auto mb-2 opacity-75"
                            style={{ width: "48px", height: "48px" }} />
                        <p class="small opacity-75 mb-1">Cumulative GPA</p>
                        <p class="display-4 fw-bold">3.75</p>
                    </div>

                    <div class="vr mx-3 opacity-50" style={{ height: "80px" }}></div>
                    <div class="px-3">
                        <BookOpen className="d-block mx-auto mb-2 opacity-75"
                            style={{ width: "48px", height: "48px" }} />
                        <p class="small opacity-75 mb-1">Total Credits</p>
                        <p class="display-4 fw-bold">45</p>
                    </div>
                </div>
            </div>
            <TableGrades />
            <div className="row g-4">

                <div className="col-12 col-md-6 w-100">
                    <div className="bg-white rounded-4 p-4 shadow-lg">
                        <h3 className="fs-5 fw-bold mb-4 text-dark">Performance Summary</h3>

                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-secondary">Average Midterm Score</span>
                            <span className="fw-bold text-primary">83.75</span>
                        </div>

                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-secondary">Average Assignments</span>
                            <span className="fw-bold" style={{ color: "#9333ea" }}>89.50</span>
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                            <span className="text-secondary">Average Final Score</span>
                            <span className="fw-bold" style={{ color: "#db2777" }}>85.75</span>
                        </div>

                    </div>
                </div>

            </div>
            <div className="bg-white rounded-4 p-4 shadow-lg">
                <h3 className="fs-5 fw-bold mb-4 text-dark">Grade Distribution</h3>
                <div className="mb-3">
                    <div className="d-flex justify-content-between small mb-1">
                        <span>A+ / A</span>
                        <span className="fw-semibold">50%</span>
                    </div>

                    <div className="progress" style={{ height: "6px", background: "#e5e7eb" }}>
                        <div
                            className="progress-bar"
                            style={{
                                width: "50%",
                                backgroundColor: "#22c55e", 
                                borderRadius: "999px"
                            }}
                        ></div>
                    </div>
                </div>

                <div className="mb-3">
                    <div className="d-flex justify-content-between small mb-1">
                        <span>B+ / B</span>
                        <span className="fw-semibold">25%</span>
                    </div>

                    <div className="progress" style={{ height: "6px", background: "#e5e7eb" }}>
                        <div
                            className="progress-bar"
                            style={{
                                width: "25%",
                                backgroundColor: "#3b82f6", 
                                borderRadius: "999px"
                            }}
                        ></div>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-between small mb-1">
                        <span>A-</span>
                        <span className="fw-semibold">25%</span>
                    </div>

                    <div className="progress" style={{ height: "6px", background: "#e5e7eb" }}>
                        <div
                            className="progress-bar"
                            style={{
                                width: "25%",
                                backgroundColor: "#14b8a6", 
                                borderRadius: "999px"
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Grades;