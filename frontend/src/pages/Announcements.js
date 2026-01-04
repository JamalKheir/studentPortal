import "bootstrap/dist/css/bootstrap.min.css";
import AllAnnouncements from "../components/AllAnnouncements";
const Announcements = () => {
    return (
        <div className="d-flex flex-column gap-4 p-4">
            <div className="d-flex align-items-center justify-content-between">
                <h2 className="fs-2 fw-bold text-dark">Announcements</h2>
                <span
                    className="px-3 py-2 rounded-pill small fw-semibold text-white"
                    style={{ background: '#3b5998' }}
                >
                    4 New
                </span>
            </div>
            <AllAnnouncements/>
        </div>
    )
}
export default Announcements;