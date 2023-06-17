import { Link } from "react-router-dom";

export default function PaymentConfirm() {
  if (window?.location.pathname === "/cart/checkout/payment/confirm")
    require("./PaymentConfirm.css");
  return (
    <div className="box">
      <div>
        <h1 style={{ textTransform: "uppercase" }}>Success!</h1>
        <br />
        <h5>
          The payment has been made and the order has been successfully placed.{" "}
          <br /> Happy Shopping!
        </h5>
        <button type="button" className="btn">
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
        </button>
      </div>
    </div>
  );
}
