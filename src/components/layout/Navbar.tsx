import { Link } from "react-router-dom";
import logo from "/home/luisxsssx/Documents/Code/React/note-front/dist/logotwo.png";

interface NavBarProps {
  children: React.ReactNode;
}

export default function NavBar({ children }: NavBarProps) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark p-1">
        <div className="container-fluid">
          <div className="container-lg d-flex justify-content-between align-items-center mb-1 text-white">
            <Link to="/">
              <img src={logo} alt="" className="m-0 logo-small" />
            </Link>
            <div className="d-flex">
              <Link to={"/login"} className="nav-link me-4 fs-4">
                Login
              </Link>
              <Link to={"/register"} className="nav-link fs-4">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
}
