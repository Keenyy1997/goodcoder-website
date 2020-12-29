import React from 'react';
import Link from 'next/link';

// Components
import Image from '../components/image';
import Title from '../components/texts/title';

// Styles
import styles from '../styles/footer/styles.module.scss';

function Footer() {
  return (
    <div id={styles['footer']}>
      <Image
        src={'/assets/logos/logo-dark.png'}
        alt={'GoodCoder Dark Themed Logotype'}
        height={75}
      />
      <Link href={'https://instagram.com/goodcoder.js'}>
        <a target={"_blank"}>
          <div className={styles['footer--social-media']}>
            <Image
              src={'/assets/social/ig.png'}
              alt={'Instagram Logotype'}
              height={30}
            />
            <Title>
              Follow us on IG!
              <span className="social--link">
                @goodcoder.js
              </span>
            </Title>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default Footer;
