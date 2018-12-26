import React from 'react';
import RichText from './richtext';

const Block = (props) => {
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
    <article className="block">
        {props.children}
        <h2>{header}</h2>
        <RichText richtext={props.content}/>
    </article>
  );
}

export default Block;