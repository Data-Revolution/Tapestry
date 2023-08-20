import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';

const listItems = [
  {
    title: `Tourism Operators`,
    description: `Enhance the gamified solution by designing captivating experiences and challenges that showcase the diversity of South Australia's attractions. They offer rewards such as discounts and exclusive access, motivating participants to explore various activities like eco-adventures, cultural events, and wildlife encounters.`,
  },
  {
    title: `Accomodation Providers`,
    description: `Contribute by offering themed stays that align with different aspects of South Australia's tourism, such as beach getaways or outback adventures. They also collaborate with other stakeholders to create joint promotions, encouraging participants to choose accommodations based on their interests and providing a unique way to experience the region.`,
  },
  {
    title: `Heritige Custodians`,
    description: `Play a vital role by providing historical content, stories, and virtual tours that highlight the region's cultural heritage. Through interactive storytelling and augmented reality features, they engage participants in an immersive exploration of historical sites, both remotely and in person, enhancing the overall understanding and appreciation of South Australia's heritage.`,
  },
];

const ListSection = () => (
  <section className={tw(`lg:py-28 pt-28 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-16 text-center`)}>
        <h2 className={tw(`text-base text-yellow-600 font-semibold tracking-wide uppercase`)}>Grow your revenue</h2>
        <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
          Transform your business
        </p>
      </div>
      <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <ul className={tw(`space-y-12`)}>
            {listItems.map((item, index) => (
              <li className={tw(`flex -mx-4`)} key={item.title}>
                <div className={tw(`px-4`)}>
                  <span
                    className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-yellow-50 text-yellow-500`)}
                  >
                    {index + 1}
                  </span>
                </div>
                <div className={tw(`px-4`)}>
                  <h3 className={tw(`my-4 text-xl font-semibold`)}>{item.title}</h3>
                  <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
            <FeatureSvg width="100%" height="100%" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ListSection;
