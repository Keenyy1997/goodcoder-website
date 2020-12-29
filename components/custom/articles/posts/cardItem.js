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

function CardItem({
  image = '/assets/code-bg.jpg',
  title = 'Article Name',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim...',
  createdAt = '2020-12-27 23:15:00',
  link = '/article-name'
}) {

  return (
    <Link href={link}>
      <a>
        <div className={styles['card--item']}>
          <div className={styles['card--item--image']}>
            <Image
              src={'/assets/code-bg.jpg'}
              alt={'Code Background'}
              height={200}
            />
          </div>
          <div className={styles['card--item--content']}>
            <Subtitle>{ title }</Subtitle>
            <Text>{ ShortTexts(description) }</Text>

            <cite>
              Publicado el&nbsp;
              { moment(createdAt).format('DD MMM, YYYY') }
            </cite>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default CardItem;
