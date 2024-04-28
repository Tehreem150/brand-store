import React from "react";
import Header from "../Components/Header/index";
import Footer from "../Components/Footer";
import MainSlider from "../Components/MainSlider";
import Categorian from "../Components/Categorian";
import Sale from "../Components/Sale";
import ContinueShoping from "../Components/ContinueShoping";
import TrendingShoe from "../Components/TrendingShoe";
import CategoryOuttext from "../Components/Category_outtext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Recommended from "../Components/Recommended";
import BrandPartner from "../Components/BrandPartner";
import Bottomlist from "../Components/Bottomlist";
const Home = () => {
  return (
    <div className="App">
      <Header />
      <Categorian />
      <CategoryOuttext />
      <TrendingShoe />
      <MainSlider />
      <Sale />
      <ContinueShoping />
      <BrandPartner />
      <Recommended />
      <Bottomlist />
      <Footer />
    </div>
  );
};

export default Home;
