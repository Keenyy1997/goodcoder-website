import React from 'react';

// Components
import Subtitle from '../../../texts/title';
import Container from '../../../container';

// Custom components
import CardList from './cardList';

// Styles
import styles from '../../../../styles/custom/articles/list.module.scss';

function ListPosts() {
  return (
    <Container id={styles['card__list__container']}>
      <Subtitle className={styles['card__list__container--title']}>{'Ultimos Articulos'}</Subtitle>

      <CardList />                                                                                                                                                                                                                                                                       
    </Container>
  );
}

export default ListPosts;
