import React from "react";
import "../../styles/components/Button.css";

const Button = ({Text, classComponent}) => {

  return (
    <React.Fragment>
      <button className={`componentButton ${classComponent}`}>{Text}</button>
    </React.Fragment>
  );
};

export default Button;