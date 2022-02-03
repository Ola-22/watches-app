import "./style.css";

function SliderContent({ title, paragraph }) {
  return (
    <div className="content-main">
      <h1>{title}</h1>
      <p>{paragraph}</p>
      <a href="/">Discover</a>
      <div>
        <button>
          <img src="/images/add-cart.png" alt="" />
          <h6>Add to cart</h6>
        </button>
        <button>
          <img src="/images/logo-cicil.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default SliderContent;
