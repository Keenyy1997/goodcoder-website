import React from 'react';
import ReactMarkdown from 'react-markdown';

// Components
import Container from '../../container';
import Title from '../../texts/title';
import Text from '../../texts';
import Image from '../../image';

// Styles
import styles from '../../../styles/custom/articles/content.module.scss';

// Custom Renderer
import CodeBlock from './CodeBlock';

const Renderers = {
  heading : (props) => {
    return <Title as={`h${props.level}`}>{ props.node.children[0].value }</Title>
  },
  image: (props) => {
    return <Image src={props?.src} alt={props?.alt} />
  },
  code: CodeBlock,
};

function ArticleContent({ article }) {

  return (
    <Container id={styles['article__content']}>
      <ReactMarkdown
        source={article.content}
        renderers={Renderers}
      />
    </Container>
  );
}

export default ArticleContent;
