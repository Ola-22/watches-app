import MonthlyCard from "./MonthlyCard";
import "./style.css";

export default function MonthlyDeals() {
  return (
    <div className="deals-main">
      <div className="title-section">Monthly Deals</div>
      <div className="main-card">
        <MonthlyCard
          src="./images/MonthDeals1.png"
          title="Singo Maple"
          offers="20% Off"
          pricePrev="Rp 1.500.000"
          priceNext="Rp 1.264.000"
        />
        <MonthlyCard
          src="./images/MonthDeals2.png"
          title="Singo Ebony"
          offers="20% Off"
          pricePrev="Rp 1.500.000"
          priceNext="Rp 1.264.000"
        />
        <MonthlyCard
          src="./images/MonthDeals3.png"
          title="Rakai Ebony"
          offers="15% Off"
          pricePrev="Rp 1.280.000"
          priceNext="Rp 1.118.000"
        />
        <MonthlyCard
          src="./images/MonthDeals4.png"
          title="Way Kambas Mini Maple"
          offers="10% Off"
          pricePrev="Rp 1.250.000"
          priceNext="Rp 1.024.000"
        />
      </div>
    </div>
  );
}
