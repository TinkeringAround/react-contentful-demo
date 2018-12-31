import React, { Component } from "react";
import RichText from "./Richtext";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  toggleState() {
    this.setState({ active: this.state.active ? false : true });
  }

  render() {
    if (this.state.active) {
      return (
        <React.Fragment>
          <div className="question" onClick={this.toggleState.bind(this)}>
            <span>{this.props.header}</span>
            <i className={this.props.iconInverse} />
          </div>
          <RichText richtext={this.props.content} />
        </React.Fragment>
      );
    } else {
      return (
        <div className="question" onClick={this.toggleState.bind(this)}>
          <span>{this.props.header}</span> <i className={this.props.icon} />
        </div>
      );
    }
  }
}

export default Question;
