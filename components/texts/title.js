import React from 'react';

function Title({ children, as = 'h1', className, ...props }) {

  let Classes = ['title', className];

  switch(as) {
    case 'h2':
      return <h2 className={Classes.join(' ')} {...props}>{children}</h2>;
    case 'h3':
      return <h3 className={Classes.join(' ')} {...props}>{children}</h3>;
    case 'h4':
      return <h4 className={Classes.join(' ')} {...props}>{children}</h4>;
    case 'h5':
      return <h6 className={Classes.join(' ')} {...props}>{children}</h6>;
    case 'h6':
      return <h6 className={Classes.join(' ')} {...props}>{children}</h6>;
    case 'h1':
      default:
        return <h1 className={Classes.join(' ')} {...props}>{children}</h1>;
  }  
}

export default Title;
