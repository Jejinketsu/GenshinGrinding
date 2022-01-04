import React from "react";
import { Route, Routes } from "react-router";
import Title from "../../components/CustomForm/Title";
import ItensForms from "./ItensForms";
import ItensListing from "./ItensListing";

const ItemManage = () => {
  return (
    <div>
      <Title title="Itens" />
      <div>
        <Routes>
          <Route path="//*" element={<ItensListing />} end />
          <Route path="formItens" element={<ItensForms />} />
        </Routes>
      </div>
    </div>
  );
};

export default ItemManage;
