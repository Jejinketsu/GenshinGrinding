import React from "react";
import "../styles/components/LateralMenuBar.css";
import logo from "../images/logo-genshin-2.png";
import { FaRegUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import userIcon from "../images/dashboard/User_Icon.png";
import domainIcon from "../images/dashboard/Domain_icon.png";
import characterIcon from "../images/dashboard/Char_Icon.png";
import itemIcon from "../images/dashboard/Item_Icon.png";
import logoutIcon from "../images/dashboard/logout.png";

const LateralMenuBar = () => {
  return (
    <div className="Menu-lateral">
      <div className="Menu-logo">
        <img src={logo} alt="logo-genshin" />
      </div>

      <div className="Admin-perfil">
        <FaRegUserCircle size={32} color="#ffffff" className="adminPhoto" />
        <h2 className="adminName">Aucerola</h2>
        <span className="admin">Admin</span>
      </div>

      <nav className="Menu-navigate">
        <ul>
          <NavLink to="/dashboard" end>
            <li>
              <img src={userIcon} alt="userIcon" /> Users
              <div className="setOption"></div>
            </li>
          </NavLink>

          <NavLink to="/dashboard/formDomain">
            <li>
              <img src={domainIcon} alt="domainIcon" /> Domains
              <div className="setOption"></div>
            </li>
          </NavLink>

          <NavLink to="/dashboard/formCharacters">
            <li>
              <img src={characterIcon} alt="characterIcon" /> Characters
              <div className="setOption"></div>
            </li>
          </NavLink>

          <NavLink to="/dashboard/formItens">
            <li>
              <img src={itemIcon} alt="itemIcon" /> Itens
              <div className="setOption"></div>
            </li>
          </NavLink>
        </ul>
      </nav>

      <button className="logout">
        Log Out <img src={logoutIcon} alt="logoutIcon" />
      </button>
    </div>
  );
};

export default LateralMenuBar;
