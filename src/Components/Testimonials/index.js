import { useState, useEffect } from "react";
import Slider from "./Slider/Slider";
import SliderContent from "./Slider/SliderContent";
import Arrows from "./Slider/Arrows";
import "./style.css";

const len = SliderContent.length - 1;

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <>
      <div className="slider-container">
        <Slider activeIndex={activeIndex} SliderContent={SliderContent} />
        <Arrows
          prevSlide={() =>
            setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
          }
          nextSlide={() =>
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
          }
        />
      </div>
    </>
  );
}
