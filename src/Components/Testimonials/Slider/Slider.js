export default function Slider({ activeIndex, SliderContent }) {
  return (
    <>
      {SliderContent.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <div>
            <img src="/images/Rectangle.png" alt="" style={{ zIndex: "1" }} />

            <img src={slide.img} alt="" style={{ zIndex: "5" }} />
          </div>

          <div>
            <h1>Testimonials</h1>
            <p>{slide.desc}</p>
            <h4>{slide.name}</h4>
            <h6>{slide.job}</h6>
          </div>
        </div>
      ))}
    </>
  );
}
