import { Route, Routes } from "react-router-dom";

import Contact from "./components/contact/Contact";
import ContactConfirm from "./components/contact/ConfirmContact";
import HomePage from "./components/home/HomePage";
import Feedback from "./components/feedback/Feedback";
import FeedbackConfirm from "./components/feedback/FeedbackConfirm";
import About from "./components/about/about";
import Login from "./components/Auth/LoginAndRegsiter";

import Profile from "./components/icons/profile/profile";
import WishlList from "./components/icons/wishlist/wishlist";
import Cart from "./components/icons/cart/cart";
import Checkout from "./components/icons/cart/Checkout";

import Payment from "./components/payment/Payment";
import PaymentConfirm from "./components/payment/PaymentConfirm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="contact" element={<Contact />}></Route>
        <Route
          exact
          path="/contact/confirm"
          element={<ContactConfirm />}
        ></Route>
        <Route exact path="feedback" element={<Feedback />}></Route>
        <Route
          exact
          path="feedback/confirm"
          element={<FeedbackConfirm />}
        ></Route>
        <Route exact path="about" element={<About />}></Route>
        <Route exact path="signin" element={<Login />}></Route>
        <Route exact path="login" element={<Login />}></Route>
        <Route exact path="profile" element={<Profile />}></Route>
        <Route exact path="wishlist" element={<WishlList />}></Route>
        <Route exact path="cart" element={<Cart />}></Route>
        <Route exact path="cart/checkout" element={<Checkout />}></Route>

        <Route exact path="cart/checkout/payment" element={<Payment />}></Route>
        <Route
          exact
          path="cart/checkout/payment/confirm"
          element={<PaymentConfirm />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
