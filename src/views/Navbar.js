import React from "react";
import { Link } from "react-router-dom";

import "./../styles/navbar.scss";

export default () => {
    return (
      <React.Fragment>
        <header className="mobile-header">
          <nav className="mobile-menu">
            <figure className="mobile-menu-logo">
              <img
                src="https://images.ctfassets.net/pntshaoi0gaf/5A5oxIWjluIcga8QQUiCuc/fd8489b85b84bbfc822b93e1d99ffb2d/VWLogo.png"
                alt="VW Logo"
                width="32px"
                height="32px"
              />
            </figure>
            <div className="mobile-menu-text">
              <h1>VW Contentful App</h1>
            </div>
            <div className="mobile-menu-home">
              <Link to="/">
                <i className="fas fa-bars fa-2x" />
              </Link>
            </div>
          </nav>
        </header>

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
                <Link to="/faq/de">
                  <i className="fas fa-question-circle fa-2x" />
                  <br />
                  FAQ
                </Link>
              </li>

              <li>
                <Link to="/imprint/de">
                  <i className="fas fa-info-circle fa-2x" />
                  <br />
                  Impressum
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
      </React.Fragment>
    );
}