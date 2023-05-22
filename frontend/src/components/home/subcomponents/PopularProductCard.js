export default function PopularProductsCard({ items }) {
  return (
    <>
      {items.map((item) => 
        (
          <div className="product-box">
            <img alt={item.name} src={item.img} />
            <strong>{item.name}</strong>
            <span className="quantity">{item.quantity} KG</span>
            <span className="price">Rs. {item.price}</span>
            <a href="Shopping Cart HTML.html" className="cart-btn">
              <i className="fas fa-shopping-bag"></i> Add to Cart
            </a>

            <a href="/like" className="like-btn">
              <i className="far fa-heart"></i>
            </a>
          </div>
        )
      )}
    </>
  );
}
