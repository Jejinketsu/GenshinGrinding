import React from "react";
import "../../styles/components/CharacterPanel.css";
import CharacterFace from "./CharacterFace";
import AscensionItemCount from "./AscensionItemCount";

//TESTE DE IMAGENS
import sliver from "../../images/teste/albedo/prithiva_topaz_sliver_35.png";
import fragment from "../../images/teste/albedo/prithiva_topaz_fragment_35.png";
import chunk from "../../images/teste/albedo/prithiva_topaz_chunk_35.png";
import gemstone from "../../images/teste/albedo/prithiva_topaz_gemstone_35.png";
import tower from "../../images/teste/albedo/basalt_pillar_35.png";
import pergaminho1 from "../../images/teste/albedo/divining_scroll_35.png";
import pergaminho2 from "../../images/teste/albedo/sealed_scroll_35.png";
import pergaminho3 from "../../images/teste/albedo/forbidden_curse_scroll_35.png";
import mora from "../../images/teste/albedo/mora.png";
import cecilia from "../../images/teste/albedo/cecilia_35.png";
import coroa from "../../images/teste/albedo/Crown.png";

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

          <div className="others-itens">
            <AscensionItemCount ItemImage={tower} />
            <AscensionItemCount ItemImage={pergaminho3} />
            <AscensionItemCount ItemImage={mora} />

            <AscensionItemCount ItemImage={cecilia} />
            <AscensionItemCount ItemImage={pergaminho1} />
            <AscensionItemCount ItemImage={pergaminho2} />
          </div>
        </div>
      </div>

      <div className="character-ascension talents">
        <p>TALENTS</p>
        <div className="area">

          <div className="crown">
            <AscensionItemCount ItemImage={coroa} />
          </div>

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
