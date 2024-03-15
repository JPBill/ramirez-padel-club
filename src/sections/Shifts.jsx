import { buffetFeatures } from '../constants/data';
import styles from '../style';

const Shifts = () => {
  return (
    <section className="pt-0 lg:pt-6">
      <div className="bg-noise">
        <div className={`${styles.paddingX} pt-8 text-center`}>
          <h3 className={`${styles.heading} text-primary-white`}>
            Reserva tu cancha
          </h3>
        </div>
        <div className="mt-6 bg-white pb-12 sm:mt-8 sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-noise" />
            <div className={`${styles.boxWidth} ${styles.paddingX} relative`}>
              <div className="mx-auto max-w-3xl overflow-hidden rounded-xl shadow-lg lg:flex lg:max-w-none">
                <div className="flex-1 bg-balls bg-cover px-6 py-8 lg:p-16">
                  <p className="max-w-2xl text-base text-black">
                    <span className="hidden sm:block">
                      ¿Prefieres una cancha rápida como la de cemento o una
                      lenta de césped sintético?
                    </span>{' '}
                    Solicita un{' '}
                    <span className="font-medium">turno fijo semanal</span> o{' '}
                    <span className="font-medium">temporal por el día</span>.
                  </p>
                  <div className="mt-8">
                    <div className="flex items-center">
                      <h4 className="flex-shrink-0 pr-4 text-sm font-bold uppercase tracking-wider text-secondary-green">
                        El tercer tiempo es nuestro
                      </h4>
                      <div className="border-t-2 border-secondary-green md:flex-1" />
                    </div>
                    <ul
                      role="list"
                      className="mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0"
                    >
                      {buffetFeatures.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start lg:col-span-1"
                        >
                          <div className="flex-shrink-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="h-6 w-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                              />
                            </svg>
                          </div>
                          <p className="ml-3 text-sm text-black">{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-50 px-6 py-8 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
                  <p className="mt-4 text-sm text-gray-500 underline">
                    1:30hs de juego en cualquier cancha
                  </p>
                  <div className="mt-6">
                    <div className="rounded-md shadow">
                      <a
                        href="https://chat.whatsapp.com/Klp4KId7n97Hj8FIT1krsR"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className={styles.btn}
                      >
                        Pedir turno
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shifts;
