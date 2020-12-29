import React from 'react';

const MAX_LENGTH = 250;

function Text({ children, className, ...props }) {

  const Classes = ['text', className];
  return <p {...props} className={Classes.join(' ')}>{children}</p>;
}

export function ShortTexts(value) {
  return value.length > MAX_LENGTH ? `${value.substr(0,MAX_LENGTH)}...` : value;
}

export default Text;
