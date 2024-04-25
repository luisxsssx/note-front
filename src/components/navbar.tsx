import { Link } from "react-router-dom";
import logo from "/home/luisxsssx/Documents/Code/React/note-front/dist/logotwo.png";

interface NavBarProps {
  children: React.ReactNode;
}

export default function NavBar({ children }: NavBarProps) {
  return (
    <>
      <div className="container-lg mx-auto p-1">
        <div className="container-lg d-flex justify-content-between align-items-center mb-1">
          <a href="/">
            <img src={logo} alt="" className="m-0 logo-small" />
          </a>
          <div className="d-flex">
            <Link to={"/login"} className="nav-link me-4 fs-5">
              Login
            </Link>
            <Link to={"/register"} className="nav-link fs-5">
              Register
            </Link>
          </div>
        </div>
        <hr className="p-3 container-lg" />
      </div>
      <main>{children}</main>
    </>
  );
}
