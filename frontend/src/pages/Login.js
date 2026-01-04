import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("https://student-api-r6f7.onrender.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        navigate("/dashboard");
      } else {
        alert(data.message || "Invalid login");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/");
  }, [navigate]);

  return (
    <div>
      <nav className="text-center p-2" style={{ background: "#3b5998" }}>
        <h1 className="text-white">Smart University Portal</h1>
      </nav>

      <main>
        <div className="container mt-5" style={{ width: "70%" }}>
          <div className="card text-center p-4">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "#3b5998",
                margin: "20px auto",
              }}
            >
              <FaUser size={50} color="white" />
            </div>

            <h2>Login</h2>

            <form className="container mt-3" onSubmit={handleLogin}>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn w-100 text-white"
                style={{ backgroundColor: "#3b5998", fontSize: "20px" }}
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <div className="mt-3">
              <Link
                to="/forgot-password"
                className="text-decoration-none"
                style={{ color: "#3b5998" }}
              >
                Forgot password?
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
