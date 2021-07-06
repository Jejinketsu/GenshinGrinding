import React from "react";
import "../../styles/components/Input.css";
import ErrorMessage from "./ErrorMessage";

const Input = ({ label, type, name, erro, value, onChange, onBlur, classComponent }) => {

  return (
    <React.Fragment>
      <div className={`CustomInput ${classComponent}`}>
        <label htmlFor={name}>{label}</label>

        <input
          className="Input"
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        <ErrorMessage erro={erro} />
      </div>
    </React.Fragment>
  );
};

export default Input;
