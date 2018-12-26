import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//import my own modules
import Imprint from "./components/imprint";
import FAQ from "./components/faq";
import Home from "./components/home";

import "./scss/App.scss";

const contentful = require("contentful");

const client = contentful.createClient({
  space: "pntshaoi0gaf",
  accessToken:
    "0c5358d8334cd3f6fc85ff1eae5cb6c4689d1b1f9db29177d783286480d7fd46"
});

class App extends Component {
  render() {
    return (
      <Router>
        <div id="app">
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

          <div id="main-content">
            <Route exact path="/" render={props => <Home />} />

            <Route
              exact
              path="/imprint/de"
              render={props => <Imprint contentful={client} locale="de-DE" />}
            />

            <Route
              path="/imprint/en"
              render={props => <Imprint contentful={client} locale="en-GB" />}
            />
            
            <Route path="/faq" render={props => <FAQ contentful={client} />} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
