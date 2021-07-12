import React from "react";
import "../../styles/components/ItemBlock.css";
import item from "../../images/Item_Cor_Lapis.png";
import star from "../../images/Star_Icon.png";
import edit from "../../images/Edit_char.png";

const ItemBlock = () => {
  return (
    <div className="ItemBlock">
      <div className="itemImg">
        <img src={item} alt="item" />
      </div>
      <div className="ItemInfo">
        <span>
          <img src={star} alt="star" /> 1
        </span>
        <button> <img src={edit} alt="edit" /> </button>
      </div>
    </div>
  );
};

export default ItemBlock;
