import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import SideBarMobile from "./components/SideBarMobile";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Announcements from "./pages/Announcements";
import Registration from "./pages/Registration";
import Grades from "./pages/Grades";
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("Dashboard");


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/*"
          element={

            <div className="d-flex vh-100 bg-light w-100">

             <div className="SidebarPC">
               <Sidebar
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                sidebarOpen={sidebarOpen}
              />
             </div>

              <div
                className="min-vh-100 bg-light bg-gradient"
                style={{
                  width: "100%",
                  marginLeft: sidebarOpen ? "280px" : "0px",
                  transition: "0.3s",
                }}
              >
                <Navbar
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                />
                <div>
                 <SideBarMobile/>
                </div>
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/grades" element={<Grades />} />
                  <Route path="/announcements" element={<Announcements />} />
                  <Route path="/registration" element={<Registration />} />
                </Routes>
              </div>
            </div>
          }
        />

      </Routes>
    </Router >
  );
}

export default App;
