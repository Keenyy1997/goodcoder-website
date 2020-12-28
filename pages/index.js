// Components
import TopBar from '../components/topbar';
import Layout from '../components/layout';

// Custom Components
import HeroItem from '../components/hero/main';
import Container from '../components/container';
import LatestPosts from '../components/custom/articles/posts/listPosts';

export default function Home() {
  return (
    <Layout 
      seo={{ 
        metaTitle: 'GoodCoder | Artículos de Usabilidad en Javascript',
        titleSuffix: false,
      }}>
      <TopBar />

      <HeroItem />

      <LatestPosts />

      <Container style={{ height: '100vh'}} />
    </Layout>
  )
}
