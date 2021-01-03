import React from 'react';

// Components
import Image from '../image';
import Title from '../texts/title';

// Styles
import styles from '../../styles/author/hero.module.scss';


function AuthorHero({ author }) {

  return (
    <div className={styles['hero--author']}>
      <Image
        src={author?.photo?.url}
        alt={author?.photo?.caption}
        height={75}
        className={styles['hero--author--photo']}
      />

      <Title as='h2' className={styles['hero--author--name']}>
        { author?.name }
      </Title>
    </div>
  );
}

export default AuthorHero;
