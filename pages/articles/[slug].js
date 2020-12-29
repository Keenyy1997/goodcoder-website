import React from 'react';

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import TopBar from '../../components/topbar';
import Layout from '../../components/layout';

// Custom Components
import HeroItem from '../../components/hero/article';
import ArticleContent from '../../components/custom/articles/content';
import Footer from '../../components/footer';


// GRAPHQL
import { gql } from '@apollo/client';
import { apolloClient } from '../../lib/apollo';

export default function ArticlePage({ global, article }) {

  React.useEffect(() => {
    /**
     * Server-side rendering does not provide the 'document' object
     * therefore this import is required either in useEffect or componentDidMount as they
     * are exclusively executed on a client
     */
    AOS.init({
      once: true,
      disable: 'mobile',
    });
  }, []);

  React.useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  console.log('[ARTICLE]', article);
  
  return (
    <Layout
      globalSettings={global}
      seo={{
        titleSuffix: true,
        metaTitle: article?.title,
        metaDescription: article?.description,
        shareImage: article?.image?.url
      }}>
      <TopBar />

      <HeroItem
        article={article}
      />

      <ArticleContent
        article={article}
      />

      <Footer />
    </Layout>
  );
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query({
    query: gql`
      query FindArticles {
        articles {
          id
          slug
        }
      }
    `,
  });

  return {
    paths: (data?.articles || []).map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

const query = gql`
  query FetchBasePage($slug: String!) {
    global {
      siteName
      favicon {
        url
        caption
      }
      defaultSeo {
        metaTitle
        metaDescription
        shareImage {
          url
          caption
        }
      }
    }
    
    articles (
      publicationState:LIVE
      where:{
        slug:$slug
      }
    ) {
      id
      title
      slug
      description
      content
      published_at
      image {
        caption
        url
      }
      writer {
        id
        name
        email
        photo {
          url
          caption
        }
      }
    }
  }
`;

export async function getStaticProps({ params }) {
  const { data } = await apolloClient.query({
    query,
    variables: {
      slug: params?.slug,
    },
  });

  if (!data?.articles[0]) 
    return {
      notFound: true,
    };

  return {
    props: {
      global: {
        ...data.global,
      },
      article: {
        ...data.articles[0],
      },
    },
  };
}