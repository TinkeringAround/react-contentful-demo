import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "scss/Faq.scss";

import Spinner from "components/Spinner";

class FAQ extends Component {
  state = {
    entry: ""
  };

  componentDidMount() {
    this.props.contentful
      .getEntries({
        content_type: "faq",
        locale: this.props.locale
      })
      .then(entries => {
        this.setState({
          entry: entries.items[0].fields
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { title, header } = this.state.entry;

    if (this.state.entry !== "") {
      return (
        <div id="faq">
          <header className="header">
            <h1>{title}</h1>
          </header>

          <nav className="main-navbar has-background-dark">
            <ul>
              <li><Link to="/faq">Tipps und Tricks</Link></li>
              <li><Link to="/faq">Generell</Link></li>
              <li className="has-text-white">Vertrag</li>
              <li><Link to="/faq">Guide und Inform</Link></li>
              <li><Link to="/faq">Security und Service</Link></li>
              <li><Link to="/faq">e-Remote</Link></li>
            </ul>
          </nav>

          <nav className="sub-navbar has-background-grey">
            <ul>
              <li><Link to="/faq">Aktivierung der Dienste</Link></li>
              <li><Link to="/faq">Bestehende Verträge</Link></li>
              <li className="has-text-white">Bezahlung</li>
              <li><Link to="/faq">Übertragung/Verkauf</Link></li>
              <li><Link to="/faq">Verlängerung/Bestellung</Link></li>
              <li><Link to="/faq">Vertragslaufzeit/-ende</Link></li>
            </ul>
          </nav>


          <section className="content">
            <header className="intro">
              <h1>{header}</h1>
            </header>
          </section>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

export default FAQ;
