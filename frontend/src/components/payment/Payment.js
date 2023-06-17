import { Link } from "react-router-dom";

export default function Payment() {
  if (window?.location.pathname === "/cart/checkout/payment")
    require("./payment.css");

  return (
    <>
      <div className="container">
        <div className="card-container">
          <div className="front">
            <div className="image">
              <img src="https://i.imgur.com/iPjGMpM.png" alt="chip" />
              <img src="https://i.imgur.com/HDMROff.png" alt="visa" />
            </div>
            <div className="card-number-box">################</div>
            <div className="flexbox">
              <div className="box">
                <div className="card-holder-name">Name of card holder</div>
              </div>
              <div className="box">
                <span>expiry</span>
                <div className="expiration">
                  <span className="exp-month">mm /</span>
                  <span className="exp-year">yyyy</span>
                </div>
              </div>
            </div>
          </div>
          <div className="back">
            <div className="stripe"> </div>
            <div className="box">
              <span>cvv</span>
              <div className="cvv-box"> </div>
              <img src="https://i.imgur.com/HDMROff.png" alt="Visa" />
            </div>
          </div>
        </div>
        <form action="">
          <div className="inputBox">
            <span>card number</span>
            <input
              type="text"
              maxLength={16}
              className="card-number-input"
              required=""
            />
          </div>
          <div className="inputBox">
            <span>name on card</span>
            <input type="text" className="card-holder-input" required="" />
          </div>
          <div className="flexbox">
            <div className="inputBox">
              <span>expiry mm</span>
              <select name="" id="" className="month-input" required="">
                <option value="month" selected="" disabled="">
                  month
                </option>
                <option value={"01"}>01</option>
                <option value={"02"}>02</option>
                <option value={"03"}>03</option>
                <option value={"04"}>04</option>
                <option value={"05"}>05</option>
                <option value={"06"}>06</option>
                <option value={"07"}>07</option>
                <option value={"08"}>08</option>
                <option value={"09"}>09</option>
                <option value={"10"}>10</option>
                <option value={"11"}>11</option>
                <option value={"12"}>12</option>
              </select>
            </div>
            <div className="inputBox">
              <span>expiry yy</span>
              <select name="" id="" className="year-input" required="">
                <option value="year" selected="" disabled="">
                  year
                </option>
                <option value={2022}>2022</option>
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
                <option value={2025}>2025</option>
                <option value={2026}>2026</option>
                <option value={2027}>2027</option>
                <option value={2028}>2028</option>
                <option value={2029}>2029</option>
                <option value={2030}>2030</option>
                <option value={2031}>2031</option>
              </select>
            </div>
            <div className="inputBox">
              <span>cvv</span>
              <input
                type="text"
                maxLength={4}
                className="cvv-input"
                required=""
              />
            </div>
          </div>
          <button type="button" className="submit-btn">
            <Link
              to="/cart/checkout/payment/confirm"
              style={{ color: "white", textDecoration: "none" }}
            >
              Submit
            </Link>
          </button>
        </form>

        <script src="./PaymentJS.js"></script>
      </div>
    </>
  );
}
