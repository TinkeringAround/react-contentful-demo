import React, { Component } from "react";
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
              <li><a href="#">Tipps und Tricks</a></li>
              <li><a href="#">Generell</a></li>
              <li className="has-text-white">Vertrag</li>
              <li><a href="#">Guide und Inform</a></li>
              <li><a href="#">Security und Service</a></li>
              <li><a href="#">e-Remote</a></li>
            </ul>
          </nav>

          <nav className="sub-navbar has-background-grey">
            <ul>
              <li><a href="#">Aktivierung der Dienste</a></li>
              <li><a href="#">Bestehende Verträge</a></li>
              <li className="has-text-white">Bezahlung</li>
              <li><a href="#">Übertragung/Verkauf</a></li>
              <li><a href="#">Verlängerung/Bestellung</a></li>
              <li><a href="#">Vertragslaufzeit/-ende</a></li>
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
