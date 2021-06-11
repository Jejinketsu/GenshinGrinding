import React from "react";
import "../../styles/components/InventaryItens.css";
import plusImage from "../../images/Plus_Image.png";
import ItemCount from "./ItemCount";

const InventoryItens = () => {
  return (
    <div className="inventory_box">
      <h1>Inventory</h1>
      <div className="inventory">
        
        <div className="ascension-material stone">
          <p>
            Stone Ascension Material
            <button className="plus_item">
              <img src={plusImage} alt="adicionar material" />
            </button>
          </p>

          <div className="ascension-material-box"></div>
        </div>

        <div className="ascension-material boss">
          <p>
            Boss Ascension Material
            <button className="plus_item">
              <img src={plusImage} alt="adicionar material" />
            </button>
          </p>

          <div className="ascension-material-box">
            <ItemCount />
            <ItemCount />
            <ItemCount />
            <ItemCount />
            <ItemCount />
            <ItemCount />
            <ItemCount />
            <ItemCount />
          </div>
        </div>

        <div className="ascension-material world">
          <p>
            World Ascension Material
            <button className="plus_item">
              <img src={plusImage} alt="adicionar material" />
            </button>
          </p>

          <div className="ascension-material-box"></div>
        </div>

        <div className="ascension-material level">
          <p>
            Level Ascension Material
            <button className="plus_item">
              <img src={plusImage} alt="adicionar material" />
            </button>
          </p>

          <div className="ascension-material-box"></div>
        </div>
      </div>
    </div>
  );
};

export default InventoryItens;
