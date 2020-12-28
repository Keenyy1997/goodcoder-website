import React from 'react';

function Title({ children }) {

  let Classes = ['title'];
  return <h1 className={Classes.join(' ')}>{children}</h1>;
}

export default Title;
