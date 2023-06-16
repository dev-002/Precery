import React from "react";

import Banner from "./Banner";
import Navbar from "./Navbar";
import Categories from "./Categories";
import PopularProducts from "./PopularProducts";
import PopularBundlePack from "./PopularBundlePack";
import Clients from "./Clients";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <Banner />

      <Categories />
      <PopularProducts />
      <PopularBundlePack />
      <Clients />

      <Footer />
    </>
  );
}

export default HomePage;
