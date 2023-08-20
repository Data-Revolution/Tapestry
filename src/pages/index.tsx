import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="Tapestry"
        description=""
      />
      <Header />
      <main>
        <VideoSection />
        <ListSection />
      </main>
      <Footer />
    </Page>
  );
}
