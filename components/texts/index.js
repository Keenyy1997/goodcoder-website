import React from 'react';

function Text({ children }) {

  let Classes = ['text'];
  return <p className={Classes.join(' ')}>{children}</p>;
}

export default Text;
