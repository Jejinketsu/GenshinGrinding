import React from "react";
import "../../styles/components/AscensionItemCount.css";

const AscensionItemCount = ({ ItemImage }) => {
  return (
    <React.Fragment>
      <div className="item-ascension-box">
        <div className="item-ascension-count">
          <img src={ItemImage} alt="item" />
        </div>

        <div className="item-count">
          <p>0/1</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AscensionItemCount;
