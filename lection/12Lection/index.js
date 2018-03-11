import React from 'react';
import { render } from 'react-dom';

const Hellower = () => {
  return (
    <h1>Hello World</h1>
  );
}

render(
  <Hellower />,
  document.getElementById('root')
);