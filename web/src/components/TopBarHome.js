import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/TopBar.css";
import logo from "../images/logo-genshin-2.png";

const TopBarHome = ({ pageLink }) => {
  
  function handleClick(event) {
    event.preventDefault();
    document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
  }

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

            <a
              href="#about"
              onClick={handleClick}
              className={pageLink === "about" ? "link active" : "link"}
            >
              About Us
            </a>
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
