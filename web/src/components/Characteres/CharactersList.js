import React from "react";
import "../../styles/components/CharactersList.css";
import CharacterPanel from "./CharacterPanel";

const CharactersList = () => {
  return (
    <div className="character_box">
      <h1>Characters</h1>
      <div className="characters">
        <div className="progress_dashboard">
          <CharacterPanel />
          <CharacterPanel />
          <CharacterPanel />
        </div>
      </div>
    </div>
  );
};

export default CharactersList;
