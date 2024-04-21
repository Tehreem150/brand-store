import React from "react";
import Header from "../Components/Header/index";
import Footer from "../Components/Footer";
import MainSlider from "../Components/MainSlider";
import Categorian from "../Components/Categorian";
import Sale from "../Components/Sale";
import ContinueShoping from "../Components/ContinueShoping";
import TrendingShoe from "../Components/TrendingShoe";
import Category_outtext from "../Components/Category_outtext";
const Home = () => {
  return (
    <div className="App">
      <Header />
      <MainSlider />
      <Categorian />
      <Category_outtext />
      <TrendingShoe />
      <ContinueShoping />
      <Sale />
      <Footer />
    </div>
  );
};

export default Home;
