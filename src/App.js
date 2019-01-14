import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/app.scss";

import Imprint from "./views/Imprint";
import FAQ from "./views/Faq";
import Home from "./views/Home";
import Navbar from "./views/Navbar";
import AGB from "./views/Agb";
import Services from "./views/Services";

const contentful = require("contentful");
const config = {
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  api: process.env.REACT_APP_CONTENTFUL_API_KEY
};

const client = contentful.createClient({
  space: config.space,
  accessToken: config.api
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
              path="/imprint/de-DE"
              render={props => <Imprint contentful={client} locale="de-DE" />}
            />

            <Route
              exact
              path="/imprint/en-GB"
              render={props => <Imprint contentful={client} locale="en-GB" />}
            />

            <Route
              exact
              path="/faq/de-DE"
              render={props => <FAQ contentful={client} locale="de-DE" />}
            />

            <Route
              exact
              path="/services/:id/de-DE"
              render={props => <Services contentful={client}  {...props} locale="de-DE" />}
            />

            <Route
              exact
              path="/agb/de-DE"
              render={props => <AGB contentful={client} locale="de-DE" />}
            />

            <Route
              exact
              path="/agb/en-GB"
              render={props => <AGB contentful={client} locale="en-GB" />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
