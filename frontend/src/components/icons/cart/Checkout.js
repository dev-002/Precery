import { Link } from "react-router-dom";

export default function Payment() {
  if (window?.location.pathname === "/cart/checkout") require("./Checkout.css");

  return (
    <>
      <div className="contact-in">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192866!2d77.06889754725779!3d28.52758200617606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1642929688022!5m2!1sen!2sin"
            width="100%"
            height="auto"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
        <div className="contact-form">
          <h1 align="center">Details For Delivery</h1>
          <div id="error_message" />
          <form className="address_form" onsubmit="return validate_form();">
            <input
              type="text"
              placeholder="Name"
              className="contact-form-txt"
              id="name"
              required=""
            />
            <input
              type="text"
              placeholder="Address"
              className="contact-form-txt"
              id="address"
              required=""
            />
            <input
              type="text"
              placeholder="Email-ID"
              className="contact-form-txt"
              id="email"
              required=""
            />
            <input
              type="text"
              placeholder="Locality/Apartment"
              className="contact-form-txt"
              required=""
            />
            <input
              type="text"
              placeholder="Pincode"
              className="contact-form-txt"
              id="pincode"
              required=""
            />
            <input
              type="text"
              placeholder="Contact No."
              className="contact-form-txt"
              id="phone"
              required=""
            />
            <input
              type="text"
              placeholder="Date (Format: dd/mm/yyyy)"
              className="contact-form-txt"
              id="date"
              required=""
            />
            <input
              type="text"
              placeholder="Time Slot (Format: Starting Time - Ending Time. Give a duration of 2 hours.)"
              className="contact-form-txt"
              id="time"
              required=""
            />
            <button type="submit" className="contact-form-btn" id="submit">
              <Link
                to="/cart/checkout/payment"
                style={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Submit
              </Link>
            </button>
          </form>
        </div>
        <script src="./CheckoutJS.js"></script>
      </div>
    </>
  );
}
