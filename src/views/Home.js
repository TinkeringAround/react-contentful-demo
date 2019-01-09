import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.scss";

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
          <i className="fas fa-info-circle fa-8x" />
        </Link>
      </div>

      <div className="faq">
        <h1>FAQ</h1>
        <Link to="/faq/de">
          <i className="fas fa-question-circle fa-8x" />
        </Link>
      </div>

      <div className="agb">
        <h1>AGB</h1>
        <Link to="/agb/de">
          <i className="fas fa-file fa-8x" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
