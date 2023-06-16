export default function PopularBundlePackCard({ items }) {
  return (
    <>
      {items &&
        items.map((item) => {
          return (
            <div className="product-box">
              <img alt="pack" src={item.img} />
              <strong>{item.name}</strong>
              <span className="quantity">{item.quantity}</span>
              <span className="price">Rs. {item.price}</span>
              <a href="Shopping Cart HTML.html" className="cart-btn">
                <i className="fas fa-shopping-bag"></i> Add to Cart
              </a>
              <a href="/like" className="like-btn">
                <i className="far fa-heart"></i>
              </a>
            </div>
          );
        })}
    </>
  );
}
