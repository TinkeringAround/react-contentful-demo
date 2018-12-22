import React from 'react';

import './contentBlock.scss';

const RichText = (props) => {
  var paragraphs = "";
  var classNames = "";

  if(props.className) {
    classNames += props.className;
  }

  if(props.richtext) {
    paragraphs = props.richtext.content.map((paragraph) => {
      var lines = paragraph.content.map( (line) => line.value);
  
      return(
        <p className={classNames}>{lines}</p>
      )
    });
  }

  return(
    paragraphs
  );
}

export default RichText;