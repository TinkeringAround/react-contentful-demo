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
        <Link to="/imprint/de-DE">
          <i className="fas fa-info-circle fa-4x" />
        </Link>
        <h1>Impressum</h1>
      </div>

      <div className="faq">
        <Link to="/faq/de-DE">
          <i className="fas fa-question-circle fa-4x" />
        </Link>
        <h1>FAQ</h1>
      </div>

      <div className="agb">
        <Link to="/agb/de-DE">
          <i className="fas fa-file fa-4x" />
        </Link>
        <h1>AGB</h1>
      </div>

      <div className="services">
        <Link to="/services/WVWZZZAUZJW000001/de-DE">
          <i className="fas fa-car fa-4x" />
        </Link>
        <h1>Dienste</h1>
      </div>
    </div>
  );
};

export default Home;
