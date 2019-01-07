import React from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const RichText = props => {
  return props.richtext
    ? props.richtext.content.map((paragraph, index) => {
        return <p key={index}>{documentToHtmlString(paragraph)}</p>;
      })
    : "";
};

export default RichText;