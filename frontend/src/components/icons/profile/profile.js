export default function Profile() {
  if (window?.location.pathname === "/profile") require("./profile.css");

  return (
    <>
      <div className="container">
        <div className="leftbox">
          <nav>
            <button onclick="tabs(0)" className="tab active">
              <i className="fas fa-user" />
            </button>
            <button onclick="tabs(1)" className="tab">
              <i className="far fa-credit-card" />
            </button>
            <button onclick="tabs(2)" className="tab">
              <i className="fas fa-tv" />
            </button>
            <button onclick="tabs(3)" className="tab">
              <i className="fas fa-tasks" />
            </button>
            <button onclick="tabs(4)" className="tab">
              <i className="fas fa-cog" />
            </button>
          </nav>
        </div>
        <div className="rightbox">
          <div className="profile tabShow">
            <h1>Personal Information</h1>
            <h2>Name</h2>
            <input type="text" className="input" placeholder="Name" />
            <h2>Birthday</h2>
            <input type="text" className="input" placeholder="dd/mm/yyyy" />
            <h2>Gender</h2>
            <input type="text" className="input" placeholder="Gender" />
            <h2>Email</h2>
            <input type="email" className="input" placeholder="Email" />
            <h2>Password</h2>
            <input type="password" className="input" />
            <button className="btn">update</button>
          </div>
          <div className="Payment tabShow">
            <h1>Shipment Information</h1>
            <h2>Billing Adress</h2>
            <input
              type="text"
              className="input"
              placeholder="enter your address"
            />
            <h2>Pincode</h2>
            <input type="text" className="input" placeholder="pin code" />
            <h2>Last Order Shipped On</h2>
            <input type="number" className="input" placeholder="dd/yy/mm" />
            <h2>Reedem Card</h2>
            <input
              type="text"
              className="input"
              placeholder="enter gift code"
            />
            <button className="btn">update</button>
          </div>
          <div className="Subscription tabShow">
            <h1>Subscription Information</h1>
            <h2>Payment Date</h2>
            <p>December 10,2021 </p>
            <h2>Date of Next Payment</h2>
            <p>December 10, 2022</p>
            <h2>Plan</h2>
            <p>Yearly</p>
            <button className="btn">update</button>
          </div>
          <div className="Privacy tabShow">
            <h1>Privacy Setting</h1>
            <h2>Manage Email Notification</h2>
            <p />
            <h2>Manage Privacy Settings</h2>
            <p />
            <h2>Terms Of Use</h2>
            <p />
            <button className="btn">update</button>
          </div>
          <div className="settings tabShow">
            <h1>Account Setting</h1>
            <h2>Hold Subscription</h2>
            <p />
            <h2>Cancel Subscription</h2>
            <p />
            <h2>Your Devices</h2>
            <p />
            <h2>Referrals</h2>
            <p />
            <button className="btn">update</button>
          </div>
        </div>
      </div>

      <script
        src="https://kit.fontawesome.com/cacf32ff12.js"
        crossorigin="anonymous"
      ></script>
      <script src="./ProfileJS.js"></script>
    </>
  );
}
