import { Link } from "react-router-dom";

export default function FeedbackConfirm() {
  return (
    <div class="box">
      <div>
        <h1>Thank You</h1>
        <br />
        <h5>
          Your feedback has been submitted. We shall take it into consideration
          to improve our website.
        </h5>
        <button type="button" class="btn">
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
        </button>
      </div>
    </div>
  );
}
