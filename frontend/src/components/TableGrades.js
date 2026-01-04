import "bootstrap/dist/css/bootstrap.min.css";
const TableGrades = () => {
    const grades = [
        { course: 'Database Systems', midterm: 85, assignments: 90, final: 88, total: 88, grade: 'A' },
        { course: 'Software Engineering', midterm: 78, assignments: 85, final: 80, total: 81, grade: 'B+' },
        { course: 'Artificial Intelligence', midterm: 92, assignments: 95, final: 90, total: 92, grade: 'A+' },
        { course: 'Information Security', midterm: 80, assignments: 88, final: 85, total: 84, grade: 'A-' }
    ];
    return (
        <div className="bg-white rounded-4 shadow-lg overflow-hidden">
            <div className="table-responsive">
                <table className=" align-middle mb-0 w-100">
                    <thead
                        style={{
                            background:'#3b5998' ,
                            color: "white"
                        }}
                    >
                        <tr>
                            <th className="px-4 py-3 text-start">Course</th>
                            <th className="px-4 py-3 text-center">Midterm</th>
                            <th className="px-4 py-3 text-center">Assignments</th>
                            <th className="px-4 py-3 text-center">Final</th>
                            <th className="px-4 py-3 text-center">Total</th>
                            <th className="px-4 py-3 text-center">Grade</th>
                        </tr>
                    </thead>

                    <tbody>
                        {grades.map((grade, index) => (
                            <tr key={index} className="border-bottom">
                                <td className="px-4 py-3 fw-semibold text-dark">{grade.course}</td>

                                <td className="px-4 py-3 text-center text-secondary">{grade.midterm}</td>

                                <td className="px-4 py-3 text-center text-secondary">{grade.assignments}</td>

                                <td className="px-4 py-3 text-center text-secondary">{grade.final}</td>

                                <td className="px-4 py-3 text-center fw-bold text-primary fs-5">
                                    {grade.total}
                                </td>

                                <td className="px-4 py-3 text-center">
                                    <span
                                        className={`badge px-3 py-2 fs-6 text-white rounded-pill ${grade.grade.startsWith("A")
                                                ? "bg-success"
                                                : grade.grade.startsWith("B")
                                                    ? "bg-primary"
                                                    : "bg-warning text-dark"
                                            }`}
                                    >
                                        {grade.grade}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default TableGrades