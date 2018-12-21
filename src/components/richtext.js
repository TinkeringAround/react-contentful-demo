import React from 'react';

const RichText = (props) => {
  var paragraphs = "";

  if(props.richtext) {
    paragraphs = props.richtext.content.map((paragraph) => {
      var lines = paragraph.content.map( (line) => line.value);
  
      return(
        <p>{lines}</p>
      )
    });
  }

  return(
    <article className="content">{paragraphs}</article>
  );
}

export default RichText;