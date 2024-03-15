import Form from '../components/Form';
import HeroComponent from '../components/HeroComponent';
import styles from '../style';

const Contact = () => {
  return (
    <div className="overflow-hidden">
      <HeroComponent title="Contactanos" subtitle="Info" />
      <section className={`${styles.boxWidth} ${styles.paddingX} pb-6`}>
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-16">
            <div className="divide-y divide-gray-300">
              <div className="flex gap-x-7 py-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-1.5 h-6 w-6 flex-shrink-0 text-gray-800 "
                >
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                  <path d="M15 7a2 2 0 0 1 2 2"></path>
                  <path d="M15 3a6 6 0 0 1 6 6"></path>
                </svg>

                <div className="grow">
                  <h3 className={`${styles.heading2} text-primary-green`}>
                    Turnos
                  </h3>

                  <a
                    href="https://chat.whatsapp.com/Klp4KId7n97Hj8FIT1krsR"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="mt-2 inline-flex items-center gap-x-2 font-medium text-gray-600 transition-colors hover:text-gray-400"
                  >
                    Grupo de WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex gap-x-7 py-6">
                <svg
                  className="mt-1.5 h-6 w-6 flex-shrink-0 text-gray-800 "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                </svg>
                <div className="grow">
                  <h3 className={`${styles.heading2} text-primary-green`}>
                    Torneos
                  </h3>

                  <a
                    href="https://api.whatsapp.com/send?phone=3434522912"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="mt-2 inline-flex items-center gap-x-2 font-medium text-gray-600 transition-colors hover:text-gray-400"
                  >
                    3434522912
                  </a>
                </div>
              </div>

              <div className="flex gap-x-7 py-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="mt-1.5 h-6 w-6 flex-shrink-0 text-gray-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>

                <div className="grow">
                  <h3 className={`${styles.heading2} text-primary-green`}>
                    Ubicación
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-x-2 font-medium text-gray-600">
                    Urquiza y French - Lunes a Sábados de 12hs a 00hs
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg border border-gray-300 shadow-lg bg-gray-100 p-4 sm:p-6 lg:p-8 ">
              <h3 className="mb-8 text-xl font-semibold text-gray-800">
                ¿Alguna consulta?
              </h3>
              <Form />
            </div>
          </div>
        </div>

        <div className={`${styles.flexCenter} pt-12`}>
          <div className="flex-1 shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3376.8222455821096!2d-60.2021683256865!3d-32.18206773368078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b6a10a314eeed3%3A0x4bd05f29bd4053dc!2sRam%C3%ADrez%20Padel%20Club!5e0!3m2!1ses-419!2sar!4v1701108211330!5m2!1ses-419!2sar"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-video h-[400px] w-full"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
