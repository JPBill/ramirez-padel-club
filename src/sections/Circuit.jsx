import { circuitFeatures } from '../constants/data';
import { Link } from 'react-router-dom';
import FeaturesItem from '../components/FeaturesItem';
import styles from '../style';

const Circuit = () => {
  return (
    <section className="bg-gray-100">
      <div className={`${styles.boxWidth} ${styles.padding} space-y-24`}>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className={`${styles.heading} text-primary-green`}>
              Circuito Anual
            </h3>
            <p className={`${styles.paragraph} mt-3 `}>
              ¡La competencia te espera! Unite a nuestro circuito.
            </p>
            <div className="mt-12 space-y-12">
              {circuitFeatures.map((feature) => {
                return <FeaturesItem key={feature} text={feature} />;
              })}
            </div>
            <div className="mt-10">
              <Link
                to="/ranking"
                className="inline-flex items-center font-semibold text-primary-green"
              >
                Ranking
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 my-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className={`${styles.flexCenter} mt-10 lg:mt-0 lg:pl-8`}>
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-32 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="/circuit-img-3.webp"
                loading="lazy"
                alt=""
              />
              <img
                className="object-cover rounded shadow-lg h-32 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="/circuit-img-1.webp"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src="/circuit-img-2.webp"
                loading="lazy"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Circuit;
