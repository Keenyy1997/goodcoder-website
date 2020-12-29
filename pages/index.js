// Components
import TopBar from '../components/topbar';
import Layout from '../components/layout';

// Custom Components
import HeroItem from '../components/hero/main';
import Container from '../components/container';
import LatestPosts from '../components/custom/articles/posts/listPosts';
import Footer from '../components/footer';

export default function Home() {
  return (
    <Layout 
      seo={{ 
        metaTitle: 'GoodCoder | Artículos de Usabilidad en Javascript y Tecnologías de la Programación',
        titleSuffix: false,
      }}>
      <TopBar />

      <HeroItem />

      <LatestPosts />

      <Footer />
    </Layout>
  );
}
