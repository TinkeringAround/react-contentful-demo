import React, { Component } from "react";
import "./../../scss/Imprint.scss";

import Section from "./../Block";
import RichText from "./../Richtext";
import Spinner from "./../Spinner";

class Imprint extends Component {
  state = {
    entry: "",
    sections: ""
  };

  componentDidMount() {
    this.props.contentful
      .getEntries({
        content_type: "impressum",
        locale: this.props.locale
      })
      .then(entries => {
        const renderedSections = entries.items[0].fields['sections'].map(section => (
          <Section
            key={section.sys.id}
            header={section.fields["header"]}
            content={section.fields["content"]}
          />
        ));

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
    if (this.state.entry !== "") {
      return (
        <div id="imprint">
          <header className="header">
            <h1>{this.state.entry.title}</h1>
          </header>
          
          <section className="content">
            <header className="intro">
              <h1>{this.state.entry.header}</h1>
              <RichText richtext={this.state.entry.intro} />
            </header>
            {this.state.sections}
          </section>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

export default Imprint;
