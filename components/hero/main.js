import React from 'react';

// Components
import Title from '../texts/title';
import Text, { ShortTexts } from '../texts';
import Container from '../container';
import PrimaryButton from '../buttons/primary';
import Image from '../image';

// Styles
import styles from '../../styles/hero/styles.module.scss';

function HeroMain({ article }) {
  const { image, title, description, slug } = article;

  return (
    <div className={styles.hero}>
      <div className={styles['hero--background']}>
        <Image 
          src={image?.url || 'assets/code-bg.jpg'} 
          alt={image?.caption} 
        />
      </div>
      <div className={styles['hero--content']}>
        <Container className={styles['hero--content--container']}>
          <Title className={styles['title']}>{ title }</Title>
          <Text className={styles['description']}>{ ShortTexts(description) }</Text>
          {
            slug && (
              <PrimaryButton id={styles['go_to_article_button']} link={`/articles/${slug}`}>{ 'GO TO ARTICLE' }</PrimaryButton>
            )
          }
        </Container>
      </div>
    </div>
  );
}

export default HeroMain;
