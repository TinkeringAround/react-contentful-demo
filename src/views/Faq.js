import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/faq.scss";

import Spinner from "../components/Spinner";
import Section from "../components/Question";
import Footer from "../components/Footer";

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

  renderSections() {
    const renderedSection = this.state.entry.sections.map((section, index) => (
      <Section
        key={section.sys.id}
        header={index + 1 + ". " + section.fields["header"]}
        content={section.fields["content"]}
        icon="fas fa-angle-down fa-2x"
        iconInverse="fas fa-angle-up fa-2x"
      />
    ));

    return <React.Fragment>{renderedSection}</React.Fragment>;
  }

  render() {
    const { title, header, hotline } = this.state.entry;

    if (this.state.entry !== "") {
      return (
        <div id="faq">
          <header className="header">
            <h1>{title}</h1>
          </header>

          <nav className="main-navbar has-background-dark">
            <ul>
              <li className="desktop-hidden tablet-hidden">
                <Link to="#">
                  <i className="fas fa-angle-left" />
                </Link>
              </li>
              <li className="mobile-hidden">
                <Link to="#">Tipps &amp; Tricks</Link>
              </li>
              <li className="mobile-hidden">
                <Link to="#">Generell</Link>
              </li>
              <li className="has-text-white">Vertrag</li>
              <li>
                <Link to="#">Guide &amp; Inform</Link>
              </li>
              <li className="is-mobile-320-hidden">
                <Link to="#">Security &amp; Service</Link>
              </li>
              <li className="mobile-hidden">
                <Link to="#">e-Remote</Link>
              </li>
              <li className="desktop-hidden tablet-hidden no-margin-right">
                <Link to="#">
                  <i className="fas fa-angle-right" />
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="sub-navbar has-background-grey">
            <ul>
              <li className="desktop-hidden">
                <Link to="#">
                  <i className="fas fa-angle-left" />
                </Link>
              </li>
              <li className="mobile-hidden tablet-hidden">
                <Link to="#">Aktivierung der Dienste</Link>
              </li>
              <li className="mobile-hidden">
                <Link to="#">Bestehende Verträge</Link>
              </li>
              <li className="has-text-white">Bezahlung</li>
              <li>
                <Link to="#">Übertragung/Verkauf</Link>
              </li>
              <li className="mobile-hidden">
                <Link to="#">Verlängerung/Bestellung</Link>
              </li>
              <li className="mobile-hidden tablet-hidden">
                <Link to="#">Vertragslaufzeit/-ende</Link>
              </li>
              <li className="desktop-hidden no-margin-right">
                <Link to="#">
                  <i className="fas fa-angle-right" />
                </Link>
              </li>
            </ul>
          </nav>

          <section className="content">
            <header className="intro">
              <h1>{header}</h1>
            </header>
            {this.renderSections()}
            <p className="info">
              Hinweis: Die Verfügbarkeit der Dienste ist von Ihrer
              Fahrzeugausstattung und dem Land, in dem Sie sich befinden,
              abhängig.
            </p>
            <div className="contact">
              <div className="byPhone">
                <i className="fas fa-phone fa-5x" />
                <h1>{hotline.fields['hotline']} *</h1>
                <p>
                  * Unterstützt Ihr Telefonprovider diese kostenfreie Nummer
                  nicht, rufen Sie bitte +49 5363 9223300 an. Die Kosten richten
                  sich nach dem jeweiligen Tarif bei Ihrem Anbieter. Bei Anrufen
                  aus dem Ausland können Roaming-Gebühren anfallen.
                </p>
                <p>
                  <strong>Rund um die Uhr, 7 Tage die Woche</strong>
                </p>
              </div>

              <div className="byFormular">
                <i className="fas fa-envelope fa-5x" />
                <h1> </h1>
                <p>
                  Hier können Sie schriftliche Anfragen an unsere
                  Kundenbetreuung richten:
                </p>
                <button>Zum Kontaktformular</button>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

export default FAQ;
