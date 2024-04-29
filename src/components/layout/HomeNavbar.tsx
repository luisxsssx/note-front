import { Link } from "react-router-dom";

interface NavbarProps {
  children: React.ReactNode;
}

export default function HomeNavbar({ children }: NavbarProps) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <div className="container-lg d-flex justify-content-between align-items-center text-light">
            <div className="ms-auto d-flex">
              <Link className="nav-link fs-4 me-4" to={""}>
                Home
              </Link>
              <Link className="nav-link fs-4" to={""}>
                Link
              </Link>
            </div>
            <div>
             
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
}
