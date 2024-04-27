import NavBar from "../nav/navbar";
import "../../styles.css";

export default function Register() {
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
                  />
                </div>

                <div className="mb-4 mx-5 w-100">
                  <label className="form-label text-white">Lastname</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formControlLastname"
                  />
                </div>

                <div className="mb-4 mx-5 w-100">
                  <label className="form-label text-white">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="formControlEmail"
                    placeholder="name@example.com"
                  />
                </div>

                <div className="mb-4 mx-5 w-100">
                  <label className="form-label text-white">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formControlUsername"
                  />
                </div>

                <div className="mb-4 mx-5 w-100">
                  <label className="form-label text-white">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="formControlPassword"
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-outline-light mx-2 px-5 mb-4"
                  style={{ borderRadius: "2rem" }}
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