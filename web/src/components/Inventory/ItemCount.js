import React from "react";
import ItemImage from "../../images/Item_Cor_Lapis.png";
import "../../styles/components/ItemCount.css";
import { ReactComponent as TrashItem } from "../../images/trash-solid.svg";

const ItemCount = () => {
  const [count, setCount] = React.useState(0);

  function handleChange({ target }) {
    setCount(target.value);
  }

  return (
    <React.Fragment>
      <div className="item-box">
        <p>Cor Lapis</p>
        <div className="itemCount-box">
          <button className="delete-btn">
            <TrashItem />
          </button>
          <img src={ItemImage} alt="item" />
        </div>

        <div className="count">
          <input
            className="itemcount"
            name="itemcount"
            type="number"
            min="0"
            value={count}
            onChange={handleChange}
          />
        </div>
        
      </div>
    </React.Fragment>
  );
};

export default ItemCount;
