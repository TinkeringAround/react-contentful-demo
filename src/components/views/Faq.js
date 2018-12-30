import React, { Component } from "react";
import { Link } from "react-router-dom";
import "scss/Faq.scss";

import Spinner from "components/Spinner";
import Section from "components/Question";

class FAQ extends Component {
  state = {
    entry: "",
    sections: ""
  };

  componentDidMount() {
    this.props.contentful
      .getEntries({
        content_type: "faq",
        locale: this.props.locale
      })
      .then(entries => {
        const renderedSections = entries.items[0].fields["sections"].map(
          (section, index) => (
            <Section
              key={section.sys.id}
              header={index + 1 + ". " + section.fields["header"]}
              content={section.fields["content"]}
              icon="fas fa-angle-down fa-2x"
              iconInverse="fas fa-angle-up fa-2x"
            />
          )
        );

        this.setState({
          entry: entries.items[0].fields,
          sections: renderedSections
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
              <li className="desktop-hidden tablet-hidden">
                <Link to="faq">
                  <i className="fas fa-angle-left" />
                </Link>
              </li>
              <li className="mobile-hidden">
                <Link to="/faq">Tipps &amp; Tricks</Link>
              </li>
              <li className="mobile-hidden">
                <Link to="/faq">Generell</Link>
              </li>
              <li className="has-text-white">Vertrag</li>
              <li>
                <Link to="/faq">Guide &amp; Inform</Link>
              </li>
              <li>
                <Link to="/faq">Security &amp; Service</Link>
              </li>
              <li className="mobile-hidden">
                <Link to="/faq">e-Remote</Link>
              </li>
              <li className="desktop-hidden tablet-hidden no-margin-right">
                <Link to="faq">
                  <i className="fas fa-angle-right" />
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="sub-navbar has-background-grey">
            <ul>
              <li className="desktop-hidden">
                <Link to="faq">
                  <i className="fas fa-angle-left" />
                </Link>
              </li>
              <li className="mobile-hidden tablet-hidden">
                <Link to="/faq">Aktivierung der Dienste</Link>
              </li>
              <li className="mobile-hidden">
                <Link to="/faq">Bestehende Verträge</Link>
              </li>
              <li className="has-text-white">Bezahlung</li>
              <li>
                <Link to="/faq">Übertragung/Verkauf</Link>
              </li>
              <li className="mobile-hidden">
                <Link to="/faq">Verlängerung/Bestellung</Link>
              </li>
              <li className="mobile-hidden tablet-hidden">
                <Link to="/faq">Vertragslaufzeit/-ende</Link>
              </li>
              <li className="desktop-hidden no-margin-right">
                <Link to="faq">
                  <i className="fas fa-angle-right" />
                </Link>
              </li>
            </ul>
          </nav>

          <section className="content">
            <header className="intro">
              <h1>{header}</h1>
            </header>
            {this.state.sections}
            <p className="info">
              Hinweis: Die Verfügbarkeit der Dienste ist von Ihrer
              Fahrzeugausstattung und dem Land, in dem Sie sich befinden,
              abhängig.
            </p>
            <div className="contact">
              <div className="byPhone">
                <i className="fas fa-phone fa-5x" />
                <h1>0800 - 40 888 00 *</h1>
                <p>
                  * Unterstützt Ihr Telefonprovider diese kostenfreie Nummer
                  nicht, rufen Sie bitte +49 5363 9223300 an. Die Kosten richten
                  sich nach dem jeweiligen Tarif bei Ihrem Anbieter. Bei Anrufen
                  aus dem Ausland können Roaming-Gebühren anfallen.
                </p>
                <h5>Rund um die Uhr, 7 Tage die Woche</h5>
              </div>
              <div className="byFormular">
                <i className="fas fa-envelope fa-5x" />
                <h1> </h1>
                <p>
                  Hier können Sie schriftliche Anfragen an unsere
                  Kundenbetreuung richten:
                </p>
                <button>
                  Zum Kontaktformular
                </button>
              </div>
            </div>
          </section>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

export default FAQ;
