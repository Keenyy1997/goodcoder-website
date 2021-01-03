import React from 'react';
import Link from 'next/link';

// Third
import moment from 'moment';
moment.locale('es');

// Components
import Image from '../../../image';
import Title from '../../../texts/title';
import Text, { ShortTexts } from '../../../texts';

// Styles
import styles from '../../../../styles/custom/articles/card.module.scss';

function CardItem({ data, ...props }) {

  const { slug, title, description, published_at, image } = data;

  return (
    <Link href={`/articles/${slug}`}>
      <a>
        <div className={styles['card--item']} {...props}>
          <div className={styles['card--item--image']}>
            <Image
              src={ image?.url || 'assets/code-bg.jpg'}
              alt={ image?.caption }
              height={200}
            />
          </div>
          <div className={styles['card--item--content']}>
            <Title as="h3">{ title }</Title>
            <Text>{ ShortTexts(description) }</Text>

            <cite>
              PUBLICADO EL&nbsp;
              { moment(published_at).format('MMMM DD, YYYY').toLocaleUpperCase() }
            </cite>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default CardItem;
