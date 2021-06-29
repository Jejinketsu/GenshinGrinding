import React from "react";
import plusImage from "../../images/Plus_Image.png";
import "../../styles/components/AddCharacterePanel.css";
import CharacterPanel from "./CharacterPanel";

const AddCharacterePanel = ({ setCharacters }) => {
  function handleClick() {
      setCharacters((character)=>{
          return [...character, <CharacterPanel />]
      })
  }
  return (
    <div className="add_character">
      <button onClick={handleClick}>
        <img src={plusImage} alt="add character" />
      </button>
    </div>
  );
};

export default AddCharacterePanel;
