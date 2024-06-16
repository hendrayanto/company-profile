import { useState } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useMediaQuery } from 'react-responsive';

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

 
  const isMobile = useMediaQuery({ query: '(max-width: 868px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1224px)' });

 
  const fontSize = isMobile ? 'text-[5px]' : isTablet ? 'text-[10px]' : 'text-base';

  const previousSlide = () => {
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const nextSlide = () => {
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition ease-out duration-300"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="relative w-full flex-shrink-0" key={index}>
            <img src={slide.image} className="rounded-xl w-full" alt="slide" />
            <div className={`absolute left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 p-2 rounded ${fontSize} max-w-[90%] text-justify overflow-hidden whitespace-normal word-wrap break-word`} style={{ bottom: '40px' }}>
              {slide.text}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-0 h-full w-full flex justify-between items-center text-blue-700 px-4 md:px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-2 w-full">
        {slides.map((_, i) => (
          <div
            onClick={() => setCurrent(i)}
            key={i}
            className={`rounded-full w-3 h-3 cursor-pointer ${i === current ? "bg-cyan-500" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
}
