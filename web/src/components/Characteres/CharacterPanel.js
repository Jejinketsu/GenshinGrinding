import React from "react";
import "../../styles/components/CharacterPanel.css";
import CharacterFace from "./CharacterFace";
import AscensionItemCount from "./AscensionItemCount";

//TESTE DE IMAGENS
import sliver from "../../images/teste/albedo/prithiva_topaz_sliver_35.png";
import fragment from "../../images/teste/albedo/prithiva_topaz_fragment_35.png";
import chunk from "../../images/teste/albedo/prithiva_topaz_chunk_35.png";
import gemstone from "../../images/teste/albedo/prithiva_topaz_gemstone_35.png";

const CharacterPanel = () => {
  return (
    <div className="character_ascension_status">

      <div className="character-ascension face">
        <div className="area">
          <CharacterFace />
        </div>
      </div>

      <div className="character-ascension ascension">
        <p>ASCENSION</p>
        <div className="area">

          <div className="elemental-stone">
            <AscensionItemCount ItemImage={sliver} />
            <AscensionItemCount ItemImage={fragment} />
            <AscensionItemCount ItemImage={chunk} />
            <AscensionItemCount ItemImage={gemstone} />
          </div>

          <div className="others-itens"></div>

        </div>
      </div>

      <div className="character-ascension talents">
        <p>TALENTS</p>
        <div className="area">
          <div className="crown"></div>
          <div className="talens-ascension">
            <div className="world-itens"></div>
            <div className="books-boss"></div>
          </div>
        </div>
      </div>

      <div className="character-ascension level">
        <p>LEVEL</p>
      </div>

      <div className="character-ascension percentual"></div>

      <div className="character-ascension delete"></div>

      <div className="character-ascension priority"></div>
    </div>
  );
};

export default CharacterPanel;
