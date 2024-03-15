import noise from '../assets/nnoise.svg';
import { HeroTitle } from '../components/Reusable';

const HeroComponent = ({ title, subtitle }) => {
  return (
    <div className="bg-white">
      <div aria-hidden="true" className="relative">
        <img src={noise} alt="" className="h-56 w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-white" />
      </div>

      <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <div className="">
            <HeroTitle title={title} subtitle={subtitle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
