import React from "react";
import Services from "../components/home/services/Services";
import WeOffer from "../components/home/weOffer/WeOffer";

const Home = ({ weoffer }) => {
  return (
    <div className="py-4 mt-4 mt-md-0">
      <Services />
      <WeOffer data={weoffer} />
    </div>
  );
};

export default Home;
