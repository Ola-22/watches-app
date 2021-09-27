import Slider from "react-slick";
import "./style.css";
import SliderContent from "./SliderContent";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        border: "2px solid #D84727",
        background: "#D84727",
        top: "474px",
        right: "14px",
        cursor: "pointer",
        width: "60px",
        height: "60px",
      }}
      onClick={onClick}
    >
      <img src="/images/next.png" alt="" style={{ margin: "12px" }} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        border: "2px solid #D84727",
        top: "474px",
        right: "106px",
        cursor: "pointer",
        width: "60px",
        height: "60px",
        zIndex: "2",
      }}
      onClick={onClick}
    >
      <img src="/images/prev.png" alt="" style={{ margin: "12px" }} />
    </div>
  );
}

export default function SliderTop() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-main">
      <Slider {...settings}>
        <div>
          <img className="slide" src="/images/slide1.png" alt="" />
          <SliderContent
            title="WAY KAMBAS MINI EBONY"
            paragraph="MATOA Way Kambas - This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin."
          />
        </div>
        <div>
          <img className="slide" src="/images/slide1.png" alt="" />
          <SliderContent
            title="WAY KAMBAS MINI EBONY"
            paragraph="MATOA Way Kambas - This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin."
          />
        </div>
        <div>
          <img className="slide" src="/images/slide1.png" alt="" />
          <SliderContent
            title="WAY KAMBAS MINI EBONY"
            paragraph="MATOA Way Kambas - This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin."
          />
        </div>
      </Slider>
    </div>
  );
}
