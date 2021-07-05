import React from "react";
import "../../styles/components/Select.css";

const Select = ({ label, name, onChange, options }) => {
  return (
    <React.Fragment>
      <div className="CustomSelect">
        <label htmlFor={name}>{label}</label>

        <div className="select">
          <select
            name="format"
            id="format"
            onChange={onChange}
            defaultValue={"default"}
          >
            <option value="default" disabled>
              Choose a option
            </option>

            {options.map((option) => 
              <React.Fragment key={options.indexOf(option)}>
                <option value={option}>{option}</option>
              </React.Fragment>
            )}
          </select>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Select;
