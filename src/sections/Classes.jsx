import { paddleClassesFeatures } from '../constants/data';
import FeaturesItem from '../components/FeaturesItem';
import styles from '../style';

const Classes = () => {
  return (
    <section
      className={`${styles.boxWidth} ${styles.paddingX} pt-12 pb-6 sm:py-20`}
    >
      <div className="grid gap-0 lg:gap-8 lg:grid-cols-2 lg:items-center">
        <div className="lg:col-start-2 lg:col-span-2">
          <h3 className={`${styles.heading} text-primary-green`}>
            Clases de padel
          </h3>
          <p className={`${styles.paragraph} mt-3 max-w-xl`}>
            Para todos los niveles, desde principiantes hasta avanzados.{' '}
            <span className="hidden sm:block">
              Aprende las técnicas, tácticas y reglas del padel.
            </span>
          </p>
          <div className="mt-12 space-y-12">
            {paddleClassesFeatures.map((feature) => {
              return <FeaturesItem key={feature} text={feature} />;
            })}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="relative bg-gray-50 block border-2 border-primary-green rounded-lg p-4 cursor-pointer focus:outline-none">
                <p className="text-base font-medium text-gray-900">
                  Profe Pablo Molina
                </p>
                <a
                  href="https://api.whatsapp.com/send?phone=3434179290"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="mt-1 text-base text-gray-500 hover:text-primary-green inline-flex"
                >
                  Contacto{' '}
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
                </a>
              </div>
              <div className="relative block border-2 border-primary-green rounded-lg p-4 cursor-pointer focus:outline-none">
                <p className="text-base font-medium text-gray-900 whitespace-nowrap">
                  Profe Tomas Momparler
                </p>
                <a
                  href="https://api.whatsapp.com/send?phone=3434634771"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-base text-gray-500 hover:text-primary-green inline-flex"
                  aria-label="WhatsApp"
                >
                  Contacto{' '}
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
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-0 lg:col-start-1 lg:row-start-1">
          <img
            src="/ball.webp"
            loading="lazy"
            alt=""
            className="mx-auto hidden w-[360px] h-[480px] rounded-lg shadow-lg bg-gray-100 aspect-square lg:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Classes;
