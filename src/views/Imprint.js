import React, { Component } from "react";
import "../styles/imprint.scss";

import Section from "../components/Block";
import RichText from "../components/Richtext";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";

class Imprint extends Component {
  state = {
    entry: "",
    sections: ""
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

          <Footer />
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

export default Imprint;
