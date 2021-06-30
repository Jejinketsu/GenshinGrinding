import React from "react";
import "../styles/pages/Home.css";
import amber from "../images/home_images/amber.png";
import barbara from "../images/home_images/barbara.png";
import dailyitens from "../images/home_images/dailyitens.png";
import grinding from "../images/home_images/grinding.png";
import carlos from "../images/home_images/carlos.png";
import jede from "../images/home_images/jede.png";
import lucas from "../images/home_images/lucas.png";
import TopBarHome from "../components/TopBarHome";

const Home = () => {

  return (
    <section className="home">
      <TopBarHome pageLink="home" />

      <section className="description one">
        <p className="left">
          Genshin Grinding is a web tool to help Genshin Impact players manage
          their resources.
        </p>

        <div className="caracterImg amber">
          <img src={amber} alt="amber" />
        </div>
      </section>

      <section className="description">
        <div className="caracterImg barbara">
          <img src={barbara} alt="barbara" />
        </div>

        <p className="right">
          Store your game progress here! Avoid spending hours drilling through
          in-game menus to see character levels and talents, and what you need
          to farm today.
        </p>
      </section>

      <section className="examples">
        <div className="examplesImages">
          <img src={grinding} alt="grinding" />
          <img src={dailyitens} alt="dailyitens" />
        </div>

        <p>
          Register your items and set usage priorities among characters. Know
          how long it takes to reach the maximum level!
        </p>
      </section>

      <section className="about" id="about">
        <p className="AboutUs">About Us</p>

        <div className="developers">
          <img src={carlos} alt="developer" />
          <img src={jede} alt="developer" />
          <img src={lucas} alt="developer" />
        </div>

        <p>
          We are veteran players of genshin impact. Our goal in making this tool
          is to use it! But we chose to deploy it to help the entire community
          of all players. Enjoy :3
        </p>
      </section>
    </section>
  );
};

export default Home;
