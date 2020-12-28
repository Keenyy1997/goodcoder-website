import React from 'react';

// Next Components
import Link from 'next/link';

// Styles
import styles from '../../styles/buttons/primary.module.scss';

function PrimaryButton({
  children,
  link,
  ...props
}) {
  
  const BaseComponent = (
    <button className={ styles['button--primary'] } {...props}>
      {children}
    </button>
  );

  if (link) {
    return (
      <Link href={link} passHref>
        <a>
          { BaseComponent }
        </a>
      </Link>
    )
  }

  return BaseComponent;
}

export default PrimaryButton;
