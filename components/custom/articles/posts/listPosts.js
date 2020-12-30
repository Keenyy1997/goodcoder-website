import React from 'react';

// Components
import Subtitle from '../../../texts/title';
import Container from '../../../container';

// Custom components
import CardList from './cardList';

// Styles
import styles from '../../../../styles/custom/articles/list.module.scss';

function ListPosts({ articles }) {
  return (
    <Container id={styles['card__list__container']}>
      <Subtitle
        as="h2"
        data-aos="fade-right"
        data-aos-duration="450"
        className={styles['card__list__container--title']}>
          {'Últimos Artículos'}
      </Subtitle>

      <CardList list={articles} />                                                                                                                                                                                                                                                                       
    </Container>
  );
}

export default ListPosts;
