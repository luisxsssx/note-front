import NavBar from "../nav/navbar";
import "../../styles.css";
import { useState } from "react";
import { registerUser } from "./getToken";

export default function Register() {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
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
                <h2 className="fw-bold mb-2 text-uppercase p-2">Register</h2>

                <div className="mb-4 mx-5 w-100">
                  <label
                    htmlFor="formControlEmail"
                    className="form-label text-white"
                  >
                    Firtsname
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formControlFirstname"
                    value={first_name}
                    onChange={(f) => setFirst_name(f.target.value)}
                  />
                </div>

                <div className="mb-4 mx-5 w-100">
                  <label className="form-label text-white">Lastname</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formControlLastname"
                    value={last_name}
                    onChange={(l) => setLast_name(l.target.value)}
                  />
                </div>

                <div className="mb-4 mx-5 w-100">
                  <label className="form-label text-white">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="formControlEmail"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

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
                  onClick={() =>
                    registerUser({
                      first_name,
                      last_name,
                      email,
                      username,
                      password,
                    })
                  }
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavBar>
  );
}
