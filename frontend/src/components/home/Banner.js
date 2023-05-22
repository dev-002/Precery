export default function Banner() {
  return (
    <section id="search-banner">
      <img alt="bg" className="bg-1" src="https://i.imgur.com/h8pXo1s.png" />

      <img
        alt="bg"
        className="bg-1_rev"
        src="https://i.imgur.com/h8pXo1s.png"
      />

      <img alt="bg-2" className="bg-2" src="https://i.imgur.com/2smuQIz.png" />

      <div className="search-banner-text">
        <h1>Order Your daily Groceries</h1>

        <strong>#Free Delivery</strong>
        <form action="" className="search-box">
          <i className="fas fa-search"></i>

          <input
            type="text"
            className="search-input"
            placeholder="Search"
            name="search"
            size="80px"
            required
          />

          <input type="submit" className="search-btn" value="Search" />
        </form>

        <br />

        <h3>
          <a href="Best Deals HTML.html">
            Click here to learn about today's best deals
          </a>
        </h3>
      </div>
    </section>
  );
}
