export default function Login() {
  if (window?.location.pathname === "/login") require("./login.css");
  return (
    <>
      <section className="imp">
        <section>
          <div className="login show" id="one">
            <div className="textbox slide-left2">
              <div className="head">
                <h1>Sign In to BP</h1>
                <ul>
                  <li>
                    <i
                      className="fab fa-facebook-f"
                      style={{ cursor: "pointer" }}
                    />
                  </li>
                  <li>
                    <i
                      className="fab fa-google-plus-g"
                      style={{ cursor: "pointer" }}
                    />
                  </li>
                  <li>
                    <i
                      className="fab fa-linkedin-in"
                      style={{ cursor: "pointer" }}
                    />
                  </li>
                </ul>
                <h3 style={{ cursor: "pointer" }}>or use your E-mail ID</h3>
              </div>
              <form action="http://localhost:5000/login/verify" method="post">
                <input
                  type="text"
                  placeholder="EMAIL"
                  required=""
                  name="user[name]"
                />
                <input
                  type="password"
                  placeholder="PASSWORD"
                  required=""
                  name="user[password]"
                />
                <button id="b">
                  <a href="#" style={{ cursor: "pointer" }}>
                    Forgot password?
                  </a>
                </button>
                <button
                  type="submit"
                  className="sign_in_btn"
                  style={{ color: "white" }}
                >
                  SIGN IN
                </button>
              </form>
            </div>
          </div>
          <div className="sec show" id="two">
            <div className="textbox slide-left">
              <h1>Not a member?</h1>
              <p>Sign up and start shopping.</p>
              <button
                id="b1"
                style={{ cursor: "pointer" }}
                className="prompt_sign_up"
              >
                SIGN UP
              </button>
            </div>
          </div>
        </section>
        <section>
          <div className="sec hide" id="three">
            <div className="textbox slide-left">
              <h1>Already a member?</h1>
              <p>Login to keep shopping.</p>
              <button
                id="b2"
                style={{ cursor: "pointer" }}
                className="prompt_sign_in"
              >
                SIGN IN
              </button>
            </div>
          </div>
          <div className="login hide" id="four">
            <div className="textbox slide-right">
              <div className="head">
                <h1>Create Account</h1>
                <ul>
                  <li>
                    <i
                      className="fab fa-facebook-f"
                      style={{ cursor: "pointer" }}
                    />
                  </li>
                  <li>
                    <i
                      className="fab fa-google-plus-g"
                      style={{ cursor: "pointer" }}
                    />
                  </li>
                  <li>
                    <i
                      className="fab fa-linkedin-in"
                      style={{ cursor: "pointer" }}
                    />
                  </li>
                </ul>
                <h3 style={{ cursor: "pointer" }}>or use your E-mail ID</h3>
              </div>
              <form action="">
                <input type="text" placeholder="NAME" required="" />
                <br />
                <input type="text" placeholder="EMAIL" required="" />
                <br />
                <input type="password" placeholder="PASSWORD" required="" />
                <br />
                <input type="text" placeholder="PHONE NO. (optional)" />
                <br />
                <button
                  type="submit"
                  style={{ cursor: "pointer" }}
                  className="sign_up_btn"
                >
                  <a
                    href="Home Page HTML.html"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    SIGN UP
                  </a>
                </button>
              </form>
            </div>
          </div>
        </section>
      </section>

      <script src="Login And Registration JS.js"></script>
    </>
  );
}
