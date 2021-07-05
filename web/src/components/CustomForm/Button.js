import React from "react";
import "../../styles/components/Button.css";

const Button = ({Text}) => {

  return (
    <React.Fragment>
      <button className="componentButton">{Text}</button>
    </React.Fragment>
  );
};

export default Button;