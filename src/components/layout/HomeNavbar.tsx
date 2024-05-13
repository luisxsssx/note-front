import React from "react";
import { Link } from "react-router-dom";
import "../../../src/styles.css";
import SettingsIcon from "../../assets/settings.svg";
import Account from "../../assets/account.svg";

interface NavbarProps {
  children: React.ReactNode;
}

export default function HomeNavbar({ children }: NavbarProps) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <div className="container-lg d-flex justify-content-between align-items-center text-light">
            <div className="align-items-center">
              <input
                type="search"
                className="form-control bar"
                placeholder="Search"
              />
            </div>
            <div className="ms-auto d-flex">
              <div>
                <Link to="" className="m-2">
                  <img src={SettingsIcon} alt="Settings" />
                </Link>
              </div>
              <div>
                <Link to="">
                  <img src={Account} alt="Settings" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
}
