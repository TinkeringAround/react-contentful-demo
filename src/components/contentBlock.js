import React from 'react';
import RichText from './richtext';

import './contentBlock.scss';

const ContentBlock = (props) => {
  var header = "";
  var classNames = "content ";

  if(!props.content) {
    return(
      <div></div>
    )
  }

  if(props.header) {
    header = props.header;
  }

  if(props.className) {
    classNames += props.className;
  }

  return(
    <div className={classNames}>
        {props.children}
        <h5 className="has-text-weight-bold">{header}</h5>
        <RichText className="single-spaced" richtext={props.content}/>
    </div>
  );
}

export default ContentBlock;