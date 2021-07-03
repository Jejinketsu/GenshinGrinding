import React from "react";
import "../../styles/components/CharacterPanel.css";
import CharacterFace from "./CharacterFace";
import AscensionItemCount from "./AscensionItemCount";
import trash from "../../images/Trash_Icon.png";
import arromUp from "../../images/Arrow_Up.png";
import arromDown from "../../images/Arrow_Down.png";

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
import livro1 from "../../images/teste/albedo/teaching_of_ballad_35.png";
import livro2 from "../../images/teste/albedo/guide_to_ballad_35.png";
import livro3 from "../../images/teste/albedo/philosophies_of_ballad_35.png";
import bossitem from "../../images/teste/albedo/whale-horn.png";
import xp from "../../images/teste/albedo/xp.png";

const CharacterPanel = () => {
  return (
    <div className="character_ascension_status">
      <div className="padding-area">
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
              <div className="world-itens">
                <AscensionItemCount ItemImage={pergaminho1} />
                <AscensionItemCount ItemImage={pergaminho2} />
                <AscensionItemCount ItemImage={pergaminho3} />
                <AscensionItemCount ItemImage={mora} />
              </div>
              <div className="world-itens">
                <AscensionItemCount ItemImage={livro1} />
                <AscensionItemCount ItemImage={livro2} />
                <AscensionItemCount ItemImage={livro3} />
                <AscensionItemCount ItemImage={bossitem} />
              </div>
            </div>
          </div>
        </div>

        <div className="character-ascension level">
          <p>LEVEL</p>
          <div className="area">
            <div className="level-itens">
              <AscensionItemCount ItemImage={xp} />
              <AscensionItemCount ItemImage={mora} />
            </div>
          </div>
        </div>

        <div className="character-ascension percentual">
          <p>Ascen.</p>
          <span>0%</span>
          <p>Talens</p>
          <span>0%</span>
          <p>Level</p>
          <span>0%</span>
        </div>
      </div>

      <div className="navigation-buttons">
        <div className="character-ascension delete">
          <button>
            <img src={trash} alt="deletar" />
          </button>
        </div>

        <div className="character-ascension priority">
          <button className="button-up">
            <img src={arromUp} alt="prioridade" />
          </button>

          <button className="button-down">
            <img src={arromDown} alt="prioridade" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterPanel;
