import Link from 'next/link';
import React from 'react';

// Components
import Container from '../components/container';
import ImageComponent from '../components/image';
import Text from '../components/texts';

// Styles
import styles from '../styles/topbar/styles.module.scss';

const Links = [
  {
    path: '/',
    isActive: true,
    label: 'Artículos',
  },
  // {
  //   path: '/technologies',
  //   isActive: false,
  //   label: 'Tecnologías',
  // },
];

function TopBar() {

  return (
    <div className={styles['topbar']}>
      <Container className={styles['topbar--container']}>
        <div className={styles['logo']}>
          <Link href={'/'}>
            <a>
              <ImageComponent
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-delay="200"
                src={'assets/logos/logo-light.png'}
                alt={'GoodCoder Brand Logotype'}
                height={60}
              />
            </a>
          </Link>
        </div>
        <div className={styles['links']}>
          {
            Links.map((item) => {
              return (
                <Link href={item.path} key={item.path}>
                  <a
                    data-aos="fade-left"
                    data-aos-duration="500"
                    data-aos-delay="150"
                    className={
                      [
                        styles['link--item'], 
                        item.isActive ? styles['active'] : null
                      ].join(' ')
                    }>
                    <Text>
                      { item.label }
                    </Text>
                  </a>
                </Link>
              );
            })
          }
        </div>
      </Container>
    </div>
  );
}

export default TopBar;
