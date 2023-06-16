export default function ConfirmContact() {
  return (
    <div>
      <title>Contact Form</title>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n\n            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');\n\n\t\t\t*{\n\t\t\t\tmargin:0;\n\t\t\t\tpadding:0;\n                font-family: 'Poppins', sans-serif;\n\t\t\t}\n\t\t\tbody{\n\t\t\t\tdisplay:flex;\n\t\t\t\tmin-height:100vh;\n\t\t\t\talign-items:center;\n\t\t\t\tjustify-content:center;\n\t\t\t\tbackground: #c8efd1;\n\t\t\t}\n\t\t\t.box{\n\t\t\t\theight:380px;\n\t\t\t\twidth:400px;\n\t\t\t\tbackground: white;\n\t\t\t\tpadding:20px;\n                box-shadow: 4px 4px 2px rgba(254, 236, 164, 1)\n\t\t\t}\n\t\t\t.box div{\n\t\t\t\tcolor: black;\n\t\t\t\tfont-size:30px;\n\t\t\t\tfont-family:sans-serif;\n\t\t\t\tfont-weight:800;\n\t\t\t\ttext-align:center;\n\t\t\t\ttext-transform:uppercase;\n\t\t\t\tpadding:20px 0;\n\t\t\t}\n\t\t\t.btn{\n\t\t\t\tborder-radius:20px;\n\t\t\t\tcolor:#fff;\n\t\t\t\tmargin-top:18px;\n\t\t\t\tpadding:10px;\n\t\t\t\tbackground-color:#47c35a;\n\t\t\t\tfont-size:18px;\n\t\t\t\tborder:none;\n\t\t\t\tcursor:pointer;\n\t\t\t}\n\n            .btn:hover {\n                color: #78d98f;\n                opacity: 0.8;\n                transition: 0.3s all ease;\n            }\n\n\t\t",
        }}
      />
      <div className="box">
        <div>
          <h1>Success!</h1>
          <br />
          <h5 style={{ textTransform: "capitalize" }}>
            Your form has been successfully submitted. We will get back to you
            within 2 working days.
          </h5>
          <button type="button" className="btn">
            <a
              href="Home Page HTML.html"
              style={{ color: "white", textDecoration: "none" }}
            >
              Home
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
