import React from "react";
import "./../styles/footer.scss";

const Footer = props => {
  let iconButton = "";

  if (props.hasOwnProperty('icon')) {
    iconButton = (
      <React.Fragment>
        <button onClick={props.toggle} className="icon-button">
          <i className={"fas fa-" + props.icon + " fa-2x"} />
        </button>
        <p className="toggleText">Umschalten</p>
      </React.Fragment>
    );
  }

  return (
    <footer>
      {iconButton}
      <p className="upText">Nach oben</p>
      <button className="up-button">
        <i className="fas fa-angle-double-up" />
      </button>
    </footer>
  );
};

export default Footer;
