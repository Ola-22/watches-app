import "./App.css";
import Navbar from "./Components/Navbar";
import SliderTop from "./Components/SliderTop";
import WatchesSection from "./Components/Watches-section";
import MonthlyDeals from "./Components/MonthlyDeals";
import RecentNews from "./Components/RecentNews";
import MatoaProducts from "./Components/MatoaProducts";
import Testimonials from "./Components/Testimonials";
import InstaSection from "./Components/InstaSection";
import "./styles/main.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SliderTop />
      <WatchesSection />
      <MonthlyDeals />
      <RecentNews />
      <MatoaProducts />
      <Testimonials />
      <InstaSection />
    </div>
  );
}

export default App;
