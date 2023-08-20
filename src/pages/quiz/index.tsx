import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Footer from '@/components/footer';
import QuizSection from '@/components/quiz-section';

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="Tapestry Quiz"
        description="Play the quiz game now"
      />
      <main>
        <QuizSection />
      </main>
      <Footer />
    </Page>
  );
}