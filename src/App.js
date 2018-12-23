import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.scss";

//import my own modules
import Imprint from "./components/Imprint";
import FAQ from "./components/faq";

const contentful = require("contentful");

const client = contentful.createClient({
  space: "pntshaoi0gaf",
  accessToken:
    "0c5358d8334cd3f6fc85ff1eae5cb6c4689d1b1f9db29177d783286480d7fd46"
});

class App extends Component {
  render() {
    return (
      <Router className="App">
        <section className="columns is-gapless">
          <div className="column is-1 has-background-light">
            <aside className="columns is-centered is-multiline">
              <div className="column is-12">
                <br />
              </div>
              <div className="column is-narrow">
                <figure class="image is-128x128">
                  <img
                    src="https://images.ctfassets.net/pntshaoi0gaf/5n8rKxJhv2CQw26iCyysi6/acf3944e39cca76a5d212001c58adfb9/VW-Logo.png"
                    alt="VW Logo"
                  />
                </figure>
              </div>
              <div className="column is-12"></div>
              <div className="column is-narrow">
                <Link to="/" className="title is-size-5 has-text-black">CAR-NET</Link>
              </div>
              <div className="column is-12">
                <br />
              </div>
              <div className="column is-narrow">
                <Link to="/impressum/de" className="title is-size-5 has-text-black">
                  Impressum
                </Link>
              </div>
            </aside>
          </div>

          <div className="column is-11 is-fullheight">
            <Route
              exact
              path="/impressum/de"
              render={props => <Imprint contentful={client} locale="de-DE" />}
            />
            <Route
              path="/impressum/en"
              render={props => <Imprint contentful={client} locale="en-GB" />}
            />
            <Route path="/faq/" render={props => <FAQ contentful={client} />} />
          </div>
        </section>
      </Router>
    );
  }
}

export default App;
