import React from "react";
import { Link } from "react-router-dom";

const Home = props => {
  return (
    <ul>
      <li>
        <Link to="/imprint/de">Impressum - Deutsch</Link>
      </li>
      <li>
        <Link to="/imprint/en">Impressum - Englisch</Link>
      </li>
      <li>
        <Link to="/faq">Faq</Link>
      </li>
    </ul>
  );
};

export default Home;
