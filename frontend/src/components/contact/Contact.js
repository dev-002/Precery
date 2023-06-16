export default function () {
  if (window?.location.pathname === "/contact")
    require("../../styles/contact.css");

  return (
    <div>
      <meta charSet="utf-8" />
      <title>Contact Form</title>
      <link rel="stylesheet" href="Contact Form CSS.css" />
      <div className="wrapper">
        <h2 align="center">Contact Form</h2>
        <div id="error_message" />
        <form id="myform" onsubmit="return validate();">
          <div className="input_field">
            <input type="text" placeholder="Name" id="name" />
          </div>
          <div className="input_field">
            <input type="text" placeholder="Subject" id="subject" />
          </div>
          <div className="input_field">
            <input type="text" placeholder="Phone" id="phone" />
          </div>
          <div className="input_field">
            <input type="text" placeholder="Email" id="email" />
          </div>
          <div className="input_field">
            <textarea placeholder="Message" id="message" defaultValue={""} />
          </div>
          <button type="submit" className="btn">
            <a
              href="Contact Form Confirm HTML and CSS.html"
              style={{ color: "white", textDecoration: "none" }}
            >
              Submit
            </a>
          </button>
        </form>
      </div>
      <script src="./contactJS.js"></script>
    </div>
  );
}
