import { Route, Routes } from "react-router-dom";

import Contact from "./components/contact/Contact";
import HomePage from "./components/home/HomePage";
import Feedback from "./components/feedback/Feedback";
import About from "./components/about/about";
import Login from "./components/Auth/login";
import Signin from "./components/Auth/signin";

import Profile from "./components/icons/profile/profile";
import WishlList from "./components/icons/wishlist/wishlist";
import Cart from "./components/icons/cart/cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="contact" element={<Contact />}></Route>
        <Route exact path="feedback" element={<Feedback />}></Route>
        <Route exact path="about" element={<About />}></Route>
        <Route exact path="signin" element={<Login />}></Route>
        {/** Login to Signin */}
        <Route exact path="login" element={<Login />}></Route>
        <Route exact path="profile" element={<Profile />}></Route>
        <Route exact path="wishlist" element={<WishlList />}></Route>
        <Route exact path="cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
