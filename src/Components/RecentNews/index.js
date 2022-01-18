import "./style.css";

export default function RecentNews() {
  return (
    <>
      <h1 className="title-section">Recent News</h1>
      <div className="recent-news">
        <div className="left-news">
          <h6>Where To Travel</h6>
          <h4>Matoa Where To Travel? Yogyakarta</h4>
          <button>Discover</button>
        </div>
        <div className="right-news">
          <img src="/images/recentNews.png" alt="" />
          <img src="/images/Rectangle.png" alt="" />
        </div>
      </div>
    </>
  );
}
