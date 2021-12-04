import "./style.css";

export default function Navbar() {
  return (
    <div className="nav-main">
      <>
        <img src="/images/logo.png" alt="" />
      </>
      <nav className="menu-main">
        <a href="#">Watches</a>
        <a href="#">Eyewear</a>
        <a href="#">Accessories</a>
        <a href="#">News</a>
      </nav>
      <div className="nav-box">
        <img src="/images/search.png" alt="" />
        <div className="user-box">
          <img src="/images/user.png" alt="" />
          <h6>Log In</h6>
        </div>
        <div>
          <img src="/images/cart.png" alt="" />
        </div>
      </div>
    </div>
  );
}
