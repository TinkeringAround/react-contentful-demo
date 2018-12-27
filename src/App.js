import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "scss/App.scss";

//import my own modules
import Imprint from "components/views/Imprint";
import FAQ from "components/views/Faq";
import Home from "components/views/Home";
import Navbar from "components/Navbar";

const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_API_KEY
});

class App extends Component {
  render() {
    return (
      <Router>
        <div id="app">
          <Navbar />

          <Switch id="main-content">
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
              path="/faq"
              render={props => <FAQ contentful={client} locale="de-DE" />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
