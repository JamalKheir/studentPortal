import "bootstrap/dist/css/bootstrap.min.css";
const Details = ({details}) => {
    return (
        <div>

            <div>
                <div
                    className="bg-white rounded-4 p-4 shadow border custom-border transition"
                >
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        {details.icon}
                    </div>

                    <h3 className="text-muted small mb-1">{details.name}</h3>

                    <p className="fw-bold mb-0" style={{ fontSize: "2.5rem", color: "#4f46e5" }}>
                        {details.num}
                    </p>

                    <p className="text-muted small mt-2">{details.note}</p>
                </div>
            </div>

        </div>

    )
}
export default Details;