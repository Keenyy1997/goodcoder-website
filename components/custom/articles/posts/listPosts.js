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
      <Subtitle className={styles['card__list__container--title']}>{'Ultimos Articulos'}</Subtitle>

      <CardList list={articles} />                                                                                                                                                                                                                                                                       
    </Container>
  );
}

export default ListPosts;
