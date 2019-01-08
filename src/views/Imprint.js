import React, { Component } from "react";
import "../styles/imprint.scss";

import Section from "../components/Block";
import RichText from "../components/Richtext";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";

class Imprint extends Component {
  state = {
    entry: "",
    sections: "",
    modus: "desktop"
  };

  fetchData() {
    this.props.contentful
      .getEntries({
        content_type: "impressum",
        locale: this.props.locale
      })
      .then(entries => {
        const renderedSections = entries.items[0].fields["sections"].map(
          section => (
            <Section
              key={section.sys.id}
              header={section.fields["header"]}
              content={section.fields["content"]}
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

  componentDidMount() {
    this.fetchData();
  }

  componentWillReceiveProps(newProps) {
    this.props = newProps;
    this.fetchData();
  }

  toggle() {
    this.setState({
      modus: this.state.modus === "desktop" ? "car" : "desktop"
    });
  }

  render() {
    if (this.state.hasOwnProperty("entry")) {
      const { title, header, intro } = this.state.entry;

      if (this.state.modus === "desktop") {
        return (
          <div id="imprint">
            <header className="header">
              <h1>{title}</h1>
            </header>

            <section className="content">
              <header className="intro">
                <h1>{header}</h1>
                <RichText richtext={intro} />
              </header>
              {this.state.sections}
            </section>

            <Footer toggle={this.toggle.bind(this)} icon={this.state.modus} />
          </div>
        );
      } else {
        return (
          <div id="imprint">
            <Footer toggle={this.toggle.bind(this)} icon={this.state.modus} />
          </div>
        );
      }
    } else {
      return <Spinner />;
    }
  }
}

export default Imprint;
