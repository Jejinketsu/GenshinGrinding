import React from "react";
import characterImg from "../../images/teste/albedo/albedo.png";
import Edit_char from "../../images/Edit_char.png";
import "../../styles/components/CharacterFace.css";

const CharacterFace = () => {
  
  React.useEffect(() => {
    const name = document.querySelector(".name");
    const size = name.textContent?.split("").length;
    if(size >= 8 && size <= 10 ){
        name.setAttribute("style","font-size:1.5rem");
    }else if(size >= 10){
        name.setAttribute("style","font-size:1.2rem");
    }

  }, []);

  return (
    <React.Fragment>
      <div className="face-character-box">
        <button className="levels-btn">
          <img src={Edit_char} alt="editar" />
        </button>

        <div className="face-character">
          <img src={characterImg} alt="item" />
        </div>

        <div className="level-info">
          <span className="lvl">Lv. 1</span>
          <span className="name">Albedo</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CharacterFace;
