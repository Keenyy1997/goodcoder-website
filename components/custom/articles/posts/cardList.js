import React from 'react';

// Custom Components
import CardItem from './cardItem';

// Styles
import styles from '../../../../styles/custom/articles/list.module.scss';

function CardList({ list = []}) {

  return (
    <div className={styles['card--list']}>
      {
        list.map((item) => {
          return (
            <CardItem
              key={item.slug}
              data={item}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;
