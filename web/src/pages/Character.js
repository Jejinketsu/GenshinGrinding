import TopBar from "../components/TopBar";
import "../styles/global.css";
import InventoryItens from "../components/Inventory/InventaryItens";
import CharactersList from "../components/Characteres/CharactersList";

function Characters() {
  return (
    <>
      <TopBar pageLink="characters" />

      <div className="main">
        <div className="wrapper">
          <InventoryItens />
          <CharactersList />
        </div>
      </div>
    </>
  );
}

export default Characters;
