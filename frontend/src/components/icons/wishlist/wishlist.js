import { Link } from "react-router-dom";

export default function WishlList() {
  if (window?.location.pathname === "/wishlist") require("./wishlist.css");
  return (
    <div className="container">
      <h1>Wishlist</h1>
      <div className="cart">
        <div className="products">
          <div className="product">
            <img src="https://i.imgur.com/oYbYgGQ.jpg" />
            <div className="product-info">
              <h3 className="product-name">Chakki Fresh Atta</h3>
              <h4 className="product-price">Rs. 350</h4>
              <h4 className="product-offer">50%</h4>
              <p className="product-quantity">
                Qnt:
                <input defaultValue={1} name="" />
              </p>
              <p className="product-remove">
                <i className="fas fa-trash-alt" />
                <span className="remove">Remove</span>
              </p>
            </div>
          </div>
          <div className="product">
            <img src="https://i.imgur.com/mHmTIxp.jpg" />
            <div className="product-info">
              <h3 className="product-name">Maggie</h3>
              <h4 className="product-price">Rs. 10</h4>
              <h4 className="product-offer">20%</h4>
              <p className="product-quantity">
                Qnt:
                <input defaultValue={1} name="" />
              </p>
              <p className="product-remove">
                <i className="fas fa-trash-alt" />
                <span className="remove">Remove</span>
              </p>
            </div>
          </div>
        </div>
        <div className="cart-total">
          <p>
            <span>Total Price</span>
            <span>Rs. 183</span>
          </p>
          <p>
            <span>No. of Items</span>
            <span>2</span>
          </p>
          <p>
            <span>You Save</span>
            <span>Rs. 177</span>
          </p>
          <Link to="/cart/checkout">Buy Now</Link>
        </div>
      </div>
    </div>
  );
}
