import React from "react";
import "../../styles/components/OkMessage.css";

const OkMessage = ({ message }) => {
  return <span className="OkMessage showMessage">{message}</span>;
};

export default OkMessage;
