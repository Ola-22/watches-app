import "./style.css";
import WatchesCard from "./Watches-card";

export default function WatchesSection() {
  return (
    <div className="main-section">
      <WatchesCard
        title="Luxurious Eyewear"
        paragraph="See the beauty of exotic world with the luxurious glasses"
        discover="Discover Now"
        src="/images/section1-img1.png"
      />
      <WatchesCard
        title="Comfortable Watches"
        paragraph="Feels the balancing function and beauty in our wooden watches"
        discover="Discover Now"
        src="/images/section1-img2.png"
      />
    </div>
  );
}
