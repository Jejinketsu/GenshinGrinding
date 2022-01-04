import React from "react";
import { Route, Routes } from "react-router";
import AddItemBtn from "../../components/ItensForm/AddItemBtn";
import ItensForms from "../AdminForms/ItensForms";
import ItemBlock from "../../components/ItensForm/ItemBlock";

const ItensListing = () => {
  return (
    <div className="CardsListing">
      
      <Routes>
        <Route path="formItens" element={<ItensForms />} />
      </Routes>

      <AddItemBtn />

      <ItemBlock />
    </div>
  );
};

export default ItensListing;
