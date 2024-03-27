import styles from '../style';

export const HeroTitle = ({ title, subtitle }) => {
  return (
    <h1 className={`${styles.flexCenter} relative`}>
      <span className="gradient-text bg-clip-text text-5xl font-bold uppercase md:text-6xl lg:text-7xl">
        {subtitle}
      </span>
      <span className="absolute top-7 text-3xl font-bold md:top-10 md:text-4xl lg:top-12 lg:text-5xl">
        {title}{' '}
      </span>
    </h1>
  );
};
