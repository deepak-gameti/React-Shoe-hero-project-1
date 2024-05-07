import "./App.css";

function App() {
  return (
    <div className="main-container">
      <nav className="nav-bar container">
        <div className="logo">
          <img src="/images/brand_logo.png" alt="brand-logo" />
        </div>
        <ul className="tabs">
          <li>MENU</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
        <button className="btn">Login</button>
      </nav>

      <main className="hero-page container">
        <div className="hero-text">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="btn-bx">
            <button>Shop</button>
            <button className="btn">Category</button>
          </div>
          <div className="brand-links">
            <p>Also Available On</p>
            <div className="brand-logo">
              <img src="/images/flipkart.png" alt="flipkart-logo" />
              <img src="/images/amazon.png" alt="amazon-logo" />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/shoe_image.png" alt="shoe" />
        </div>
      </main>
    </div>
  );
}

export default App;
