import Inventory from "../components/Inventory";
import CharList from "../components/CharList";
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
          {/* <Inventory /> */}
          {/* <CharList /> */}
          <InventoryItens />
          <CharactersList />
        </div>
      </div>
    </>
  );
}

export default Characters;
