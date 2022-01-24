export default function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="arrows">
      <span className="prev" onClick={prevSlide}>
        <img src="/images/left.png" alt="" />
      </span>
      <span className="next" onClick={nextSlide}>
        <img src="/images/right.png" alt="" />
      </span>
    </div>
  );
}
