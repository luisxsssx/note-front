import NavBar from "../navbar";
import logoNote from "../../../dist/logotwo.png";
import "../../styles.css";

export default function Login() {
  return (
    <NavBar>
      <div className="container-lg justify-content">
        <div className="row justify-content-center align-items-center">
          <div className="col-sm-6">
            <div className="d-flex flex-row ps-4 pt-4">
              <i
                className="fas fa-crow fa-3x me-3"
                style={{ color: "#709085" }}
              ></i>
            </div>

            <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-2">
              <h3
                className="fw-normal mb-3 ps-5 pb-3 text-center"
                style={{ letterSpacing: "1px" }}
              >
                Login
              </h3>

              <div className="mb-4 mx-5 w-100">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="email"
                  placeholder="Email address"
                />
              </div>

              <div className="mb-4 mx-5 w-100">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="password"
                  placeholder="Password"
                />
              </div>

              <button
                className="btn btn-info mb-4 px-5 mx-5 w-100"
                type="button"
              >
                Login
              </button>

              <p className="small mb-5 pb-lg-3 ms-5 text-center">
                <a className="text-muted" href="#!">
                  Forgot password?
                </a>
              </p>
              <p className="ms-5 text-center">
                Don't have an account?{" "}
                <a href="#!" className="link-info">
                  Register here
                </a>
              </p>
            </div>
          </div>

          <div className="col-sm-5 d-none d-sm-block px-0">
            <img
              src={logoNote}
              alt="Login image"
              className="w-100"
              style={{ objectFit: "cover", objectPosition: "left" }}
            />
          </div>
        </div>
      </div>
    </NavBar>
  );
}