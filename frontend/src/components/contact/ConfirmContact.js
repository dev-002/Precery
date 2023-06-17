import { Link } from "react-router-dom";

export default function ContactConfirm() {
  return (
    <div className="box">
      <div>
        <h1>Success!</h1>
        <br />
        <h5 style={{ textTransform: "capitalize" }}>
          Your form has been successfully submitted. We will get back to you
          within 2 working days.
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
