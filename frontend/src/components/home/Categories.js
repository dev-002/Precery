export default function Categories() {
  return (
    <section id="category">
      <div className="category-heading">
        <h2>Category</h2>

        <span>All</span>
      </div>
      <div className="category-container">
        <a className="category-box" href="Fruits Category Page HTML.html">
          <img alt="Fruits and Vegetables" src=".png" />
          <span>
            Fruits & <br /> Vegetables
          </span>
        </a>
        {/* <a className="category-box" href="Medicine Category Page HTML.html">
          <img alt="Medicines" src="3.png" />
          <span>Medicine</span>
        </a>
        <a className="category-box" href="Baby Care Category Page HTML.html">
          <img alt="Baby Care Products" src="H.png" />
          <span>Baby Care</span>
        </a> */}
        <a className="category-box" href="Office Category Page HTML.html">
          <img alt="Fish" src="png" />
          <span>Stationary</span>
        </a>
        <a className="category-box" href="Beauty Category Page HTML.html">
          <img alt="Beauty Products" src="https://i.imgur.com/Bm0yLex.png" />
          <span>Beauty</span>
        </a>
        <a className="category-box" href="Gardening Category Page HTML.html">
          <img alt="Gardening Products" src="https://i.imgur.com/AjGulv5.png" />
          <span>Gardening</span>
        </a>
      </div>
    </section>
  );
}
