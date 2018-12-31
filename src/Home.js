import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";

const Home = props => {
  return (
    <div id="home">
      <header className="header">
        <h1>
          VW Contentful App.
          <br />
          Bitte wähle eine Demo aus.
        </h1>
      </header>

      <div className="imprint">
        <h1>Impressum</h1>
        <Link to="/imprint/de">
          <img
            src="https://images.ctfassets.net/pntshaoi0gaf/50H9dCRBQQOUqQ4WCOAia6/4de54e93504822b023f8b76c01d7816c/germany-flag.png"
            alt="Germany Flag"
          />
        </Link>

        <Link to="/imprint/en">
          <img
            src="https://images.ctfassets.net/pntshaoi0gaf/50H9dCRBQQOUqQ4WCOAia6/7c721bd5184ea2c6960af294d51f58d4/united-kingdom-flag.png"
            alt="Germany Flag"
          />
        </Link>
      </div>

      <div className="faq">
        <h1>FAQ</h1>
        <Link to="/faq/de">
          <img
            src="https://images.ctfassets.net/pntshaoi0gaf/50H9dCRBQQOUqQ4WCOAia6/4de54e93504822b023f8b76c01d7816c/germany-flag.png"
            alt="Germany Flag"
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
