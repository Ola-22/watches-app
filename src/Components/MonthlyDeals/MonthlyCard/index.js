export default function MonthlyCard({
  src,
  title,
  offers,
  pricePrev,
  priceNext,
}) {
  return (
    <div className="monthly-card">
      <img src={src} alt="" />
      <div className="card-box">
        <h2>{title}</h2>
        <h4>{offers}</h4>
        <h4>{pricePrev}</h4>
        <h2>{priceNext}</h2>
        <div className="card-hover">
          <img src="/images/love.png" alt="" />
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
