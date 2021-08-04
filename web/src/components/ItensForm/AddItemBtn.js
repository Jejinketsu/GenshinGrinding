import React from "react";
import btnPlus from "../../images/Plus_Image.png";
import { NavLink } from "react-router-dom";

const AddItemBtn = () => {
  return (
    <div className="ItemBlock AddItemBtn">
      <NavLink to="formItens">
        <img src={btnPlus} alt="add item" />
      </NavLink>
    </div>
  );
};

export default AddItemBtn;
