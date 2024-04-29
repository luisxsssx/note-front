import { useState } from "react";
import { loginUser } from "../../services/authService";
import NavBar from "../layout/Navbar";
import "../../styles.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <NavBar>
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center vh-50">
          <div className="col-12">
            <div
              className="card text-white my-4 mx-auto auth"
              style={{ maxWidth: "450px", borderRadius: "1rem" }}
            >
              <div className="card-body p-5 d-flex flex-column align-items-center w-100">
                <h2 className="fw-bold mb-2 text-uppercase p-2">Login</h2>

                <div className="mb-4 mx-5 w-100">
                  <label className="form-label text-white">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formControlUsername"
                    value={username}
                    onChange={(u) => setUsername(u.target.value)}
                  />
                </div>

                <div className="mb-4 mx-5 w-100">
                  <label className="form-label text-white">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="formControlPassword"
                    value={password}
                    onChange={(p) => setPassword(p.target.value)}
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-outline-light mx-2 px-5 mb-4"
                  style={{ borderRadius: "2rem" }}
                  onClick={() => loginUser(username, password)}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavBar>
  );
}
