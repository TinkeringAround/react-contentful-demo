import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

//import my own modules
import Imprint from './components/Imprint';
import FAQ from './components/faq';

const contentful = require("contentful");

const client = contentful.createClient({
  space: "pntshaoi0gaf",
  accessToken: "0c5358d8334cd3f6fc85ff1eae5cb6c4689d1b1f9db29177d783286480d7fd46"
});

class App extends Component { 
  render() {
    return (
      <Router className="App">
        <section className="hero is-medium">
          <div className="hero-body">
            <Route exact path="/" render={(props) => ( <Imprint contentful={client} /> )} />
            <Route path="/app" render={(props) => (<FAQ contentful={client}/>)} />
          </div>
        </section>
      </Router>
    );
  }
}

export default App;