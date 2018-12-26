import React, { Component } from "react";
import Section from "./block";
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
        <header className="header">
          <h1>{this.state.entry.title}</h1>
        </header>

        <section className="content">
          <article id="intro">
            <h1>{this.state.entry.header}</h1>
            <RichText richtext={this.state.entry.intro} />
          </article>
          {sections}
        </section>
      </div>
    );
  }
}

export default Imprint;
