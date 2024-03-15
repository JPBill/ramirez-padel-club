import styles from '../style';

const FeaturesItem = ({ text }) => {
  return (
    <div className="flex justify-start items-center">
      <div className="flex-shrink-0">
        <div className={`${styles.flexCenter} w-12 h-12 rounded-md bg-noise`}>
          <img src="/tennisball.svg" className="w-7 h-7" alt="item" />
        </div>
      </div>
      <div className="ml-4">
        <h4 className={`${styles.heading2} flex-1 text-black`}>{text}</h4>
      </div>
    </div>
  );
};

export default FeaturesItem;
