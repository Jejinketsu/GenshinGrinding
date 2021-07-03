import React from "react";
import "../styles/pages/Dashboard.css";
import { Route, Routes } from "react-router";
import LateralMenuBar from "../components/LateralMenuBar";
import UserList from "./AdminForms/UserList";
import DomainForm from "./AdminForms/DomainForms";
import CharactersForms from "./AdminForms/CharactersForms";
import ItensForms from "./AdminForms/ItensForms";

const Dashboard = () => {
  return (
    <section className="Dashboard-page">
      <header className="adminmenu">
        <LateralMenuBar />
      </header>

      <section className="forms">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="formDomain" element={<DomainForm />} />
          <Route path="formCharacters" element={<CharactersForms />} />
          <Route path="formItens" element={<ItensForms />} />
        </Routes>
      </section>
    </section>
  );
};

export default Dashboard;
