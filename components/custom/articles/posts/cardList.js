import React from 'react';

// Custom Components
import CardItem from './cardItem';

// Styles
import styles from '../../../../styles/custom/articles/list.module.scss';

function CardList() {

  let Numbers = [1,2,3,4,5,6,7,8,9,10];

  return (
    <div className={styles['card--list']}>
      {
        Numbers.map((item) => {
          return (
            <CardItem
              key={item}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;
