import { marqueeImages } from '../constants/data';

const Marquee = () => {
  return (
    <>
      <div className="flex min-h-[60vh] flex-col justify-center overflow-hidden pb-6 pt-0 sm:pt-4 sm:pb-20">
        <div className="pointer-events-none relative flex gap-10 overflow-hidden">
          <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-10">
            {marqueeImages.map((image, index) => (
              <img
                key={index}
                src={image.imgUrl}
                className="aspect-square h-[160px] w-[160px] rounded-md object-cover shadow-md"
                loading="lazy"
                alt={image.alt}
              />
            ))}
          </div>
          <div
            aria-hidden="true"
            className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-10"
          >
            {marqueeImages.map((image, index) => (
              <img
                key={index}
                src={image.imgUrl}
                className="aspect-square h-[160px] w-[160px] rounded-md object-cover shadow-md"
                loading="lazy"
                alt={image.alt}
              />
            ))}
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none relative mt-10 flex gap-10 overflow-hidden"
        >
          <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-10 [animation-direction:reverse]">
            {marqueeImages.map((image, index) => (
              <img
                key={index}
                src={image.imgUrl}
                className="aspect-square h-[160px] w-[160px] rounded-md object-cover shadow-md"
                loading="lazy"
                alt={image.alt}
              />
            ))}
          </div>
          <div
            aria-hidden="true"
            className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-10 [animation-direction:reverse]"
          >
            {marqueeImages.map((image, index) => (
              <img
                key={index}
                src={image.imgUrl}
                className="aspect-square h-[160px] w-[160px] rounded-md object-cover shadow-md"
                loading="lazy"
                alt={image.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Marquee;
