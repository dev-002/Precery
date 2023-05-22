import Banner from "./components/home/Banner";
import Navbar from "./components/home/Navbar";
import Categories from "./components/home/Categories";
import PopularProducts from "./components/home/PopularProducts";
import PopularBundlePack from "./components/home/PopularBundlePack";
import Clients from "./components/home/Clients";
import Footer from "./components/home/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />

      {/* <div className="countdown-container">

            <div className="countdown-el days-c">
              <p className="big-text" id="days">0</p>
              <span>Days</span>
            </div>
            <div className="countdown-el hours-c">
              <p className="big-text" id="hours">0</p>
              <span>Hours</span>
            </div>
            <div className="countdown-el mins-c">
              <p className="big-text" id="mins">0</p>
              <span>Min</span>
            </div>
            <div className="countdown-el seconds-c">
              <p className="big-text" id="seconds">0</p>
              <span>Seconds</span>
            </div>
          </div> */}

      <Categories />
      <PopularProducts />
      <PopularBundlePack />
      <Clients />

      {/* <section id="partner">
            <div className="partner-heading">
                <h3>Our Trusted Partner</h3>
            </div>
            <div className="logo-container">
                <img alt="logo" src="https://i.imgur.com/iUOPVpm.png" />
                <img alt="logo" src="https://i.imgur.com/kyp2UKO.png" />
                <img alt="logo" src="https://i.imgur.com/072qc5v.png" />
                <img alt="logo" src="https://i.imgur.com/AADIKZS.png" />
            </div>
        </section> */}

      <Footer />
    </div>
  );
}

export default App;
