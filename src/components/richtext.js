import React from 'react';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const RichText = (props) => {
  var paragraphs = "";

  if(props.richtext) {
    paragraphs = props.richtext.content.map((paragraph) => {

      return(
        <p>{documentToHtmlString(paragraph)}</p>
      )
    });
  }

  return(
    paragraphs
  );
}

export default RichText;