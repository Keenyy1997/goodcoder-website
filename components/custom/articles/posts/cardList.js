import React from 'react';

// Custom Components
import CardItem from './cardItem';

// Styles
import styles from '../../../../styles/custom/articles/list.module.scss';

function CardList({ list = []}) {

  return (
    <div className={styles['card--list']}>
      {
        list.map((item, index) => {
          return (
            <CardItem
              key={item.slug}
              data={item}
              data-aos="fade-right"
              data-aos-delay={index * 150}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;
