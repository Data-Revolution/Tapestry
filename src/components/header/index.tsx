import { tw, css } from 'twind/css';
import Button from '@/components/button';
import Netlify from '@/constants/svg/netlify.svg';
import Nike from '@/constants/svg/nike.svg';
import Figma from '@/constants/svg/figma.svg';
import Aws from '@/constants/svg/aws.svg';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8 justify-center items-center`)}>
      {/* <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`)}>
       Tapestry
      </h1> */}
      <img className={tw(`h-48 justify-center items-center w-full`)} src="Tapestry_text_dark.svg" alt="Tapestry" width={192} height={192} />
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
        Weaving together solutions for our local tourism challenges
        </p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto pt-10`)}>
        <Button primary>Play the Quiz</Button>
        <span className={tw(`mx-2`)}>or</span>
        <Button>Login</Button>
      </div>
    </div>
  </header>
);

export default Header;
