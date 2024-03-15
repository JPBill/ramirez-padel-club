import Hero from '../sections/Hero';
import Shifts from '../sections/Shifts';
import Features from '../sections/Features';
import Marquee from '../sections/Marquee';
import Circuit from '../sections/Circuit';
import Classes from '../sections/Classes';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
      <div className="w-full h-px max-w-6xl mx-auto divider" />
      <Circuit />
      <div className="w-full h-px max-w-6xl mx-auto divider" />
      <Classes />
      <Shifts />
      <Marquee />
    </div>
  );
};

export default Home;
