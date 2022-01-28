import Slider from "react-slick";
import "./style.css";

function SampleNextArrow(props) {
  const { style } = props;
  return <div style={{ ...style, display: "none" }} />;
}

function SamplePrevArrow(props) {
  const { style } = props;
  return <div style={{ ...style, display: "none" }} />;
}

export default function InstaSection() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <h1 className="title-section">Instagram</h1>
      <Slider {...settings} className="insta-container">
        <img src="/images/insta1.png" alt="" />

        <img src="/images/insta2.png" alt="" />

        <img src="/images/insta3.png" alt="" />

        <img src="/images/insta4.png" alt="" />

        <img src="/images/insta5.png" alt="" />

        <img src="/images/insta1.png" alt="" />
      </Slider>
    </div>
  );
}
