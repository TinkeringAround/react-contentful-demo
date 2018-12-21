import React from 'react';
import RichText from './richtext';
import './richtext.scss';

const ContentBlock = (props) => {
  var header = "";
  var content = "";

  if(props.contentBlock) {
    header = props.contentBlock.fields['header'];
    content = <RichText richtext={props.contentBlock.fields['content']}/>
  }

  return(
    <article className="content">
        <strong>{header}</strong>
        {content}
    </article>
  );
}

export default ContentBlock;