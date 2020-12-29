import React from 'react';

// Components
import Title from '../texts/title';
import Text, { ShortTexts } from '../texts';
import Container from '../container';
import PrimaryButton from '../buttons/primary';

// Styles
import styles from '../../styles/hero/styles.module.scss';

function HeroMain({
  background = '/assets/code-bg.jpg',
  title = 'Array Destructuring',
  description = 'La desestructuración es una característica muy conveniente al desarrollar con javascript, es una expresión que nos permite desempaquetar valores de arrays u objetos en grupos de variables, permitiéndonos simplificar y crear código más legible',
  linkTo= '/website'
}) {

  console.log('[INFO] STYLES', styles);

  return (
    <div className={styles.hero}>
      <div className={styles['hero--background']}>
        <img src={background} alt={'coding background'} />
      </div>
      <div className={styles['hero--content']}>
        <Container className={styles['hero--content--container']}>
          <Title className={styles['title']}>{ title }</Title>
          <Text className={styles['description']}>{ ShortTexts(description) }</Text>
          {
            linkTo && (
              <PrimaryButton id={styles['go_to_article_button']} link={linkTo}>{ 'GO TO ARTICLE' }</PrimaryButton>
            )
          }
        </Container>
      </div>
    </div>
  );
}

export default HeroMain;
