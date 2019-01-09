import React from "react";
import { Link } from "react-router-dom";
import "./../styles/footer.scss";

const Footer = props => {
  let modusButton,
    localeButton = "";

  const flags = {
    germanSrc:
      "https://images.ctfassets.net/pntshaoi0gaf/50H9dCRBQQOUqQ4WCOAia6/4de54e93504822b023f8b76c01d7816c/germany-flag.png",
    germanAlt: "German Flag",
    britischSrc:
      "https://images.ctfassets.net/pntshaoi0gaf/50H9dCRBQQOUqQ4WCOAia6/7c721bd5184ea2c6960af294d51f58d4/united-kingdom-flag.png",
    britischAlt: "Britisch Flag"
  };

  if (props.hasOwnProperty("icon")) {
    modusButton = (
      <button onClick={props.toggleModus} className="modus">
        <i className={"fas fa-" + props.icon + " fa-2x"} />
      </button>
    );
  }

  if (props.hasOwnProperty("path")) {
    localeButton = (
      <Link to={props.path} className="locale">
        <img
          src={
            props.path.includes("/en-GB") ? flags.germanSrc : flags.britischSrc
          }
          alt={
            props.path.includes("/en-GB") ? flags.germanAlt : flags.britischAlt
          }
        />
      </Link>
    );
  }

  return (
    <footer>
      {localeButton}
      {modusButton}
      <p className="text">Nach oben</p>
      <button className="dummy">
        <i className="fas fa-angle-double-up" />
      </button>
    </footer>
  );
};

export default Footer;
