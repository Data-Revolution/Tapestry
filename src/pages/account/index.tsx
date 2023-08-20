import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Footer from '@/components/footer';
import QuizSection from '@/components/quiz-section';
import { tw } from 'twind';
import Link from "next/link.js";
import Button from '@/components/button';

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="Tapestry Account"
        description="Account management"
      />
      <main>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`text-gray-500 text-center text-xl lg:text-3xl justify-center items-center mt-36 mb-16`)}>
        Account mangement coming soon
        </p>
        <Link className={tw(`justify-center items-center mb-36`)} href={'./'} ><Button>Return</Button></Link>
        </div>

      </main>
      <Footer />
    </Page>
  );
}