import React, { Component } from "react";
import Section from "./contentBlock";
import RichText from "./richtext";

import "../scss/imprint.scss";

class Imprint extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entry: ""
    };
  }

  componentDidMount() {
    this.props.contentful
      .getEntries({
        content_type: "impressum",
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
    const sections = this.state.entry.sections.map(section => (
      <Section
        header={section.fields["header"]}
        content={section.fields["content"]}
      />
    ));

    return sections;
  }

  render() {
    var sections = "";

    if (this.state.entry !== "") {
      sections = this.renderSections();
    }

    return (
      <div id="imprint">
        <header id="imprint-header" className="hero is-info">
          <article className="hero-body content">
            <h1 className="title has-text-centered">
              {this.state.entry.title}
            </h1>
          </article>
        </header>

        <section
          id="imprint-main"
          className="hero-body columns is-centered is-multiline"
        >
          <div className="column is-7 content">
            <article id="intro">
              <h1>{this.state.entry.header}</h1>
              <RichText richtext={this.state.entry.intro} />
            </article>
            {sections}
          </div>
        </section>
      </div>
    );
  }
}

export default Imprint;
