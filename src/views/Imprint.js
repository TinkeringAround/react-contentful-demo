import React, { Component } from "react";
import "../styles/imprint.scss";
import "../styles/hmi.scss";

import Section from "../components/Block";
import RichText from "../components/Richtext";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";
import { INLINES } from "@contentful/rich-text-types";

class Imprint extends Component {
  state = {
    entry: "",
    modus: "desktop",
    desktop: "",
    hmi: ""
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
        content_type: "impressum",
        locale: this.props.locale,
        include: 2
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

  toggleModus() {
    this.setState({
      modus: this.state.modus === "desktop" ? "car" : "desktop"
    });
  }

  renderDesktop() {
    const { title, header, intro, sections } = this.state.entry;
    const options = {
      renderNode: {
        [INLINES.EMBEDDED_ENTRY]: node => {
          return node.data.target.fields["hotline"];
        }
      }
    };

    const renderedSections = sections.map(section => (
      <Section
        key={section.sys.id}
        header={section.fields["header"]}
        content={section.fields["content"]}
        options={options}
      />
    ));

    return (
      <React.Fragment>
        <header className="header">
          <h1>{title}</h1>
        </header>

        <section className="content">
          <header className="intro">
            <h1>{header}</h1>
            <RichText richtext={intro} />
          </header>
          {renderedSections}
        </section>
      </React.Fragment>
    );
  }

  renderHMI() {
    const { title, sections } = this.state.entry;
    const options = {
      renderNode: {
        [INLINES.EMBEDDED_ENTRY]: node => {
          return node.data.target.fields["hotline"];
        }
      }
    };

    const renderedSections = sections.map(section => (
      <Section
        key={section.sys.id}
        header={section.fields["header"]}
        content={section.fields["content"]}
        options={options}
      />
    ));

    return (
      <React.Fragment>
        <section className="content">
          <div id="hmi">
            <h1>{title}</h1>
            <div>{renderedSections}</div>
          </div>
        </section>
      </React.Fragment>
    );
  }

  render() {
    if (this.state.entry !== "") {
      return (
        <div id="imprint">
          {this.state.modus === "desktop"
            ? this.renderDesktop()
            : this.renderHMI()}

          <Footer
            toggleModus={this.toggleModus.bind(this)}
            icon={this.state.modus  === "desktop" ? "car" : "desktop"}
            path={
              this.props.locale === "de-DE"
                ? "/imprint/en-GB"
                : "/imprint/de-DE"
            }
          />
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

export default Imprint;
