import { HeroTitle } from '../components/Reusable';
import styles from '../style';

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="relative h-96 w-full">
        <img
          src="/hero.webp"
          alt=""
          className="h-full w-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white" />
      </div>
      <div
        className={`${styles.paddingX} relative mx-auto -mt-12 pb-6 sm:pb-20`}
      >
        <div className="mx-auto max-w-2xl text-center">
          <HeroTitle title="Padel Club" subtitle="Ramirez" />
        </div>

        <p
          className={`${styles.paragraph} mt-8 text-center mx-auto max-w-sm sm:mt-14 sm:max-w-2xl sm:text-xl`}
        >
          Un espacio donde las comodidades, la diversión y la competencia se
          unen en un solo lugar, tu club de padel en General Ramírez.
        </p>
      </div>
    </div>
  );
};

export default Hero;
