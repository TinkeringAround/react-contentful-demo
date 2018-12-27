import React, { Component }from "react";
import { Link } from "react-router-dom";

import "scss/Navbar.scss";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <aside className="sidebar">
        <nav>
          <ul className="navigation">
            <li>
              <img
                src="https://images.ctfassets.net/pntshaoi0gaf/5A5oxIWjluIcga8QQUiCuc/fd8489b85b84bbfc822b93e1d99ffb2d/VWLogo.png"
                alt="VW Logo"
                width="60px"
                height="60px"
              />
            </li>

            <li>
              <Link to="/">
                <i className="fas fa-home fa-2x" />
                <br />
                Start
              </Link>
            </li>

            <li>
              <Link to="/faq">
                <span className="fas fa-question-circle fa-2x" />
                <br />
                FAQ
              </Link>
            </li>

            <li>
              <Link to="/imprint/de">
                <span className="fas fa-info-circle fa-2x" />
                <br />
                Impressum
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    );
  }
}

export default Navbar;
