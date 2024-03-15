import { useState } from 'react';
import { clubFeatures } from '../constants/data';
import styles from '../style';

const Card = ({ id, imgUrl, title, active, handleClick }) => (
  <div
    className={`relative ${
      active === id ? 'flex-[10] lg:flex-[3.5]' : 'flex-[2] lg:flex-[0.5]'
    } ${
      styles.flexCenter
    } ease-in-out h-[700px] min-w-[170px] cursor-pointer transition-[flex] duration-[0.7s]`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      loading="lazy"
      alt={title}
      className="absolute h-full w-full rounded-xl object-cover"
    />
    {active !== id ? (
      <h2 className="text absolute z-0 text-lg font-semibold text-primary-white sm:text-2xl lg:bottom-20 lg:origin-[0,0] lg:rotate-[-90deg]">
        {title}
      </h2>
    ) : (
      <div className="absolute bottom-0 p-6 w-full flex-col justify-start rounded-b-xl bg-[rgba(0,0,0,0.5)] lg:p-8">
        <h3 className="text text-center text-xl sm:text-2xl font-semibold text-primary-white">
          {title}
        </h3>
      </div>
    )}
  </div>
);

const Features = () => {
  const [active, setActive] = useState('feature-2');
  return (
    <section className={`${styles.paddingX} pb-6 sm:pb-20`}>
      <div className={styles.boxWidth}>
        <div className="flex flex-col min-h-[60vh] gap-5 lg:flex-row">
          {clubFeatures.map((item, index) => (
            <Card
              key={item.id}
              {...item}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
