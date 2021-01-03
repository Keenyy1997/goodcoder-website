import React from 'react';
import moment from 'moment';
moment.locale('es');

// Components
import Title from '../texts/title';
import Text, { ShortTexts } from '../texts';
import Container from '../container';
import PrimaryButton from '../buttons/primary';
import Image from '../image';
import Author from '../author/hero';

// Styles
import styles from '../../styles/hero/styles.module.scss';

function HeroMain({ article }) {
  const { image, title, description, slug, writer, published_at } = article;

  return (
    <div className={styles['hero']}>
      <div className={styles['hero--background']}>
        <Image 
          src={image?.url || 'assets/code-bg.jpg'} 
          alt={image?.caption} 
        />
      </div>
      <div className={styles['hero--content']}>
        <Container className={styles['hero--article--content--container']}>
          <Title className={styles['title']}>{ title }</Title>

          <Author
            author={writer}
          />

          <cite>
            PUBLICADO EL&nbsp;
            { moment(published_at).format('MMMM DD, YYYY').toLocaleUpperCase() }
          </cite>
        </Container>
      </div>
    </div>
  );
}

export default HeroMain;
