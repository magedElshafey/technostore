import React from "react";
import Services from "../components/home/services/Services";
import WeOffer from "../components/home/weOffer/WeOffer";
import Deals from "../components/home/deals/Deals";
import Shop from "../components/home/shop/Shop";

const Home = ({ weoffer, deals, shopWithCategories }) => {
  return (
    <div className="py-4 mt-4 mt-md-0">
      <Services />
      <WeOffer data={weoffer} />
      <Deals data={deals} />
      <Shop data={shopWithCategories} />
    </div>
  );
};

export default Home;
