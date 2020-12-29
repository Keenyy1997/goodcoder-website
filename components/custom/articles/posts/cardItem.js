import React from 'react';
import Link from 'next/link';

// Third
import moment from 'moment';

// Components
import Image from '../../../image';
import Subtitle from '../../../texts/title';
import Text, { ShortTexts } from '../../../texts';

// Styles
import styles from '../../../../styles/custom/articles/card.module.scss';

function CardItem({ data }) {

  const { slug, title, description, published_at, image } = data;

  return (
    <Link href={`/articles/${slug}`}>
      <a>
        <div className={styles['card--item']}>
          <div className={styles['card--item--image']}>
            <Image
              src={ image?.url || 'assets/code-bg.jpg'}
              alt={ image?.caption }
              height={200}
            />
          </div>
          <div className={styles['card--item--content']}>
            <Subtitle>{ title }</Subtitle>
            <Text>{ ShortTexts(description) }</Text>

            <cite>
              Publicado el&nbsp;
              { moment(published_at).format('DD MMM, YYYY') }
            </cite>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default CardItem;
