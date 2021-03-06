import React from 'react';

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import TopBar from '../components/topbar';
import Layout from '../components/layout';

// Custom Components
import HeroItem from '../components/hero/main';
import Container from '../components/container';
import LatestPosts from '../components/custom/articles/posts/listPosts';
import Footer from '../components/footer';


// GRAPHQL
import { gql } from '@apollo/client';
import { apolloClient } from '../lib/apollo';

export default function Home({ global, articles }) {

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

  return (
    <Layout
      globalSettings={global}
      seo={{
        titleSuffix: false,
      }}>
      <TopBar />

      <HeroItem
        article={articles[0] ?? {}}  
      />

      <LatestPosts articles={articles} />

      <Footer />
    </Layout>
  );
}

const query = gql`
  query FetchBasePage {
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
    
    articles(
      publicationState:LIVE
      sort:"published_at:desc"
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

export async function getStaticProps(context) {
  const { data } = await apolloClient.query({
    query,
  });

  return {
    props: {
      global: {
        ...data.global,
      },
      articles: [
        ...data.articles,
      ],
    },
  };
}