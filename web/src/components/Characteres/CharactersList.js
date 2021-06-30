import React from "react";
import "../../styles/components/CharactersList.css";
import AddCharacterePanel from "./AddCharacterePanel";
import CharacterPanel from "./CharacterPanel";

const CharactersList = () => {
  const [characters, setCharacters] = React.useState([<CharacterPanel />]);

  return (
    <div className="character_box">
      <h1>Characters</h1>
      <div className="characters">
        <div className="progress_dashboard">
          {characters.map((character) => (
            <React.Fragment key={characters.indexOf(character)}>
              {character}
            </React.Fragment>
          ))}
          <AddCharacterePanel setCharacters={setCharacters}/>
        </div>
      </div>
    </div>
  );
};

export default CharactersList;
