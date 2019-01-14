import React from "react";
import RichText from "./Richtext";

const Block = props => {
  return (
    <article className="block">
      <h2>{props.header}</h2>
      <RichText richtext={props.content} options={props.options}/>
    </article>
  );
};

export default Block;