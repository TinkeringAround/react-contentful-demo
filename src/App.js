import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./scss/app.scss";

import Imprint from "./components/views/Imprint";
import FAQ from "./components/views/Faq";
import Home from "./components/views/Home";
import Navbar from "./components/Navbar";

const contentful = require("contentful");

const client = contentful.createClient({
  space: "pntshaoi0gaf",
  accessToken: "0c5358d8334cd3f6fc85ff1eae5cb6c4689d1b1f9db29177d783286480d7fd46"
});

class App extends Component {
  render() {
    return (
      <Router>
        <div id="app">
          <Navbar />

          <Switch className="content">
            <Route exact path="/" component={Home} />

            <Route
              exact
              path="/imprint/de"
              render={props => <Imprint contentful={client} locale="de-DE" />}
            />

            <Route
              exact
              path="/imprint/en"
              render={props => <Imprint contentful={client} locale="en-GB" />}
            />

            <Route
              exact
              path="/faq/de"
              render={props => <FAQ contentful={client} locale="de-DE" />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
