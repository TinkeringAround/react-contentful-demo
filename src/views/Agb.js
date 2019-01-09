import React, { Component } from "react";
import { Link } from "react-router-dom";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import RomanNumbers from "roman-numerals";
import "../styles/agb.scss";

import Spinner from "../components/Spinner";
import Footer from "../components/Footer";

class AGB extends Component {
  state = {
    entry: ""
  };

  componentDidMount() {
    this.fetchData();
  }

  componentWillReceiveProps(newProps) {
    this.props = newProps;
    this.fetchData();
  }

  fetchData() {
    this.props.contentful
      .getEntries({
        content_type: "agb",
        locale: this.props.locale
      })
      .then(entries => {
        if (entries.items.length > 0) {
          this.setState({
            entry: entries.items[0].fields
          });
        } else {
          throw new Error("Could not fetch any data from Contentful.");
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if (this.state.entry !== "") {
      const { title, header, updatedAt } = this.state.entry;

      const dateFormat = { month: "long", year: "numeric"};
      const date = new Date(updatedAt).toLocaleDateString(this.props.locale, dateFormat);

      const renderedSections = this.state.entry.sections.map(
        (section, index) => {
          const p = documentToHtmlString(section.fields["content"]);
          const roman = RomanNumbers.toRoman(index+1);

          return (
            <article key={index} className="block">
              <h2>{roman}. {section.fields["header"]}</h2>
              <div dangerouslySetInnerHTML={{ __html: p }} />
            </article>
          );
        }
      );

      return (
        <div id="agb">
          <header className="header">
            <h1>{title}</h1>
          </header>

          <nav className="main-navbar has-background-dark">
            <ul>
              <li className="has-text-white">
                Allgemeine Geschäftsbedingungen
              </li>
              <li className="is-mobile-320-hidden">
                <Link to="#">Datenschutz</Link>
              </li>
              <li className="is-mobile-hidden">
                <Link to="#">Cookie-Richtlinien</Link>
              </li>
              <li className="is-mobile">
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
            {renderedSections}

            <div className="block">
              <span>(Stand: {date})</span>
            </div>
          </section>

          <Footer
            path={this.props.locale === "de-DE" ? "/agb/en-GB" : "/agb/de-DE"}
          />
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

export default AGB;
