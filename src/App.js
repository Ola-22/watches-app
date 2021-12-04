import "./App.css";
import Navbar from "./Components/Navbar";
import SliderTop from "./Components/SliderTop";
import WatchesSection from "./Components/Watches-section";
import MonthlyDeals from "./Components/MonthlyDeals";
import "./styles/main.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SliderTop />
      <WatchesSection />
      <MonthlyDeals />
    </div>
  );
}

export default App;
