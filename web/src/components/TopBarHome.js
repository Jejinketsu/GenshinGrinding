import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/TopBar.css";
import logo from "../images/logo-genshin-2.png";

const TopBarHome = ({ pageLink }) => {
 
  return (
    <header className="top-bar">
      <nav className="wrapper">
        <a href="/">
          <img src={logo} alt="Logo" className="logo" />
        </a>

        <div className="wrapper-left">
          <div className="links">
            <Link
              to="/"
              className={pageLink === "home" ? "link active" : "link"}
            >
              Home
            </Link>
            <Link
              to="/"
              className={pageLink === "about" ? "link active" : "link"}
            >
              About Us
            </Link>
          </div>

          <div className="profile-area">
            <Link to="/login" className={"nickname"}>
              SING IN
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TopBarHome;
