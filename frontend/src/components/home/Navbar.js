export default function Navbar() {
  return (
    <nav className="navigation">
      <a href="/" className="logo">
        <i className="https://cdn1.iconfinder.com/data/icons/jumpicon-marketing-glyph/32/-_Store-Shop-Mart-Market-Grocery-Mall-1024.png"></i>
        <span>B</span>P
      </a>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label for="menu-btn" className="menu-icon">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <a href="Home Page HTML.html" className="active">
            Home
          </a>
        </li>

        <li>
          <a href="#category">Categories</a>
        </li>

        <li>
          <a href="#popular-bundle-pack">Packages</a>
        </li>

        <li>
          <a href="Contact Form HTML.html">Contact&nbsp;Us</a>
        </li>

        <li>
          <a href="Feedback Form HTML.html">Feedback</a>
        </li>

        <li>
          <a href="About Us HTML.html">About&nbsp;us</a>
        </li>

        <li>
          <a href="#download-app">App</a>
        </li>

        <li>
          <a href="Login And Registration HTML.html">Sign&nbsp;up</a>
        </li>

        <li>
          <a href="Login And Registration HTML.html">Login</a>
        </li>
      </ul>
      <div className="right-nav">
        <a href="Wishlist HTML.html" className="like">
          <i className="fas fa-heart"></i>

          <span>2</span>
        </a>
        <a href="Shopping Cart HTML.html" className="cart">
          <i className="fas fa-shopping-cart"></i>

          <span>2</span>
        </a>
        <a href="Profile HTML.html" className="user-profile">
          <i className="fas fa-user"></i>

          <span>1</span>
        </a>
      </div>
    </nav>
  );
}