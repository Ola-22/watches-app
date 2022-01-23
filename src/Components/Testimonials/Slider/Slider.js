export default function Slider({ activeIndex, SliderContent }) {
  return (
    <div>
      {SliderContent.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img src={slide.img} alt="" />
          <p>{slide.desc}</p>
          <h4>{slide.name}</h4>
          <h6>{slide.job}</h6>
        </div>
      ))}
    </div>
  );
}
