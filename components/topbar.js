import Link from 'next/link';
import React from 'react';

// Components
import Container from '../components/container';
import ImageComponent from '../components/image';
import Title from '../components/texts/title';

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
  const [ menu, setMenu ] = React.useState(false);

  function toggleMenu() {
    setMenu((val) => !val);
  }

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
                    <Title as="h3">
                      { item.label }
                    </Title>
                  </a>
                </Link>
              );
            })
          }
        </div>
        <div className={styles['menu--mobile']}>
          <ImageComponent
            src={"assets/icons/burger-menu.svg"}
            height={40}
            alt={"Burger Menu"}
            onClick={toggleMenu}
          />
        </div>

        {
          menu && (
            <div className={styles['links--mobile']}>
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
                            styles['link--item--mobile'], 
                            item.isActive ? styles['active'] : null
                          ].join(' ')
                        }>
                        <Title as="h3">
                          { item.label }
                        </Title>
                      </a>
                    </Link>
                  );
                })
              }
            </div>
          )
        }
      </Container>
    </div>
  );
}

export default TopBar;
