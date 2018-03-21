import React from 'react';
import './Button.css';

export default (props) => {
  return(
    <section className="Button" onClick={props.click}>
      {props.text}
    </section>
  );
}