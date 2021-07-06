import React from "react";
import "../../styles/components/InputFile.css";

const InputFile = ({ label, name, classComponent, value, onChange }) => {

  return (
    <React.Fragment>
      <div className={`InputImg ${classComponent}`}>

        <label className="labelImage" htmlFor={name}>
          {label}
        </label>

        <input
          className="file"
          type="file"
          name={name}
          id="img"
          onChange={onChange}
        />

        <label className="labelpreviewImg" htmlFor={name}>
          <div className="previewImg">
            {value.preview && (
              <div
                className="preview"
                style={{ backgroundImage: `url('${value.preview}')` }}
              ></div>
            )}
          </div>
        </label>

      </div>
    </React.Fragment>
  );
};

export default InputFile;
