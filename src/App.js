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
        <div>
          <section>
            <div className="columns is-fullheight">
              <div className="column is-1 is-sidebar-menu is-hidden-mobile">
                <aside className="menu">
                  <p className="menu-label">
                    General
                  </p>
                  <ul className="menu-list">
                    <li>Dashboard</li>
                    <li>Help</li>
                  </ul>
                </aside>
              </div>
              <div className="column">
                <Route exact path="/impressum/de" render={(props) => ( <Imprint contentful={client} locale="de-DE"/> )} />
                <Route path="/impressum/en" render={(props) => ( <Imprint contentful={client} locale="en-GB"/> )} />
                <Route path="/faq/" render={(props) => (<FAQ contentful={client}/>)} />
              </div>
            </div>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;