import React from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const RichText = props => {
  return props.richtext
    ? props.richtext.content.map((paragraph, index) => {
        return props.options != null ? (
          <p key={index}>{documentToHtmlString(paragraph, props.options)}</p>
        ) : (
          <p key={index}>{documentToHtmlString(paragraph)}</p>
        );
      })
    : "";
};

export default RichText;