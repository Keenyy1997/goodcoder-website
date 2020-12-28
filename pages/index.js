// Components
import TopBar from '../components/topbar';
import Layout from '../components/layout';

// Custom Components
import HeroItem from '../components/hero/main';
import Container from '../components/container';

export default function Home() {
  return (
    <Layout seo={{metaTitle: 'Artículos'}}>
      <TopBar />

      <HeroItem />

      <Container style={{ height: '100vh'}} />
    </Layout>
  )
}
