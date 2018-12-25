import React from 'react';
import RichText from './richtext';

const ContentBlock = (props) => {
  var header = "";

  if(!props.content) {
    return(
      <div></div>
    )
  }

  if(props.header) {
    header = props.header;
  }

  return(
    <article className="contentBlock">
        {props.children}
        <h2>{header}</h2>
        <RichText richtext={props.content}/>
    </article>
  );
}

export default ContentBlock;