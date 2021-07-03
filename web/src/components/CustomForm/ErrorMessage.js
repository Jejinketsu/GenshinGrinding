import React from "react";
import "../../styles/components/ErrorMessage.css";

const ErrorMessage = ({ erro }) => {
  return <p className="ErrorMessage">{erro}</p>;
};

export default ErrorMessage;
