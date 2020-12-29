import React from 'react';

// Components
import TopBar from '../../components/topbar';
import Layout from '../../components/layout';

// Custom Components
import HeroItem from '../../components/hero/main';
import Container from '../../components/container';
import LatestPosts from '../../components/custom/articles/posts/listPosts';
import Footer from '../../components/footer';


// GRAPHQL
import { gql } from '@apollo/client';
import { apolloClient } from '../../lib/apollo';

export default function ArticlePage({ global, article }) {

  console.log('[ARTICLE]', article);
  
  return (
    <Layout
      globalSettings={global}
      seo={{
        titleSuffix: false,
      }}>
      <TopBar />

      <h1>Article: {article.title}</h1>

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