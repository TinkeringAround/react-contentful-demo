import React from 'react';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const RichText = (props) => {
  var paragraphs = "";

  if(props.richtext) {
    paragraphs = props.richtext.content.map((paragraph) => {
      const content = documentToHtmlString(paragraph);
      return(
        <p key={content}>{content}</p>
      )
    });
  }

  return(
    paragraphs
  );
}

export default RichText;