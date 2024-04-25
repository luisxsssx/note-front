import { Link } from "react-router-dom";
import "../styles.css";
import logo from "/home/luisxsssx/Documents/Code/React/note-front/dist/logotwo.png";

export default function LandingPage() {
  return (
    <div className="container-lg mx-auto p-1">
      <div className="container-lg d-flex justify-content-between align-items-center mb-1">
        <img
          src={logo}
          alt=""
          className="m-0 logo-small"
        />
        
        <div className="d-flex">
          <Link to={"#"} className="nav-link me-4 fs-5">
            Login
          </Link>
          <Link to={"#"} className="nav-link fs-5">
            Register
          </Link>
        </div>
      </div>
      <hr className="p-3 container-lg" />
      <div className="text-center">
        <h2 className="eslogan">
          CAPTURA TUS IDEAS EN CUALQUIER MOMENTO, <br /> EN CUALQUIER LUGAR
        </h2>
        <br />
        <h5>Haz que tus pensamientos cobren vida con en tus notas.</h5>
      </div>
    </div>
  );
}
