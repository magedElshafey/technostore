import React from "react";
import Services from "../components/home/services/Services";
import WeOffer from "../components/home/weOffer/WeOffer";
import Deals from "../components/home/deals/Deals";
import Shop from "../components/home/shop/Shop";
import FilterByCategory from "../components/home/filterByCategory/FilterByCategory";
import DoubleBanner from "../components/home/doubleBanner/DoubleBanner";
import SingleBanner from "../components/home/singleBanner/SingleBanner";
import Blogs from "../components/home/blogs/Blogs";

const Home = ({
  weoffer,
  deals,
  shopWithCategories,
  firstFilter,
  secondFilter,
  blogs,
}) => {
  return (
    <div className="py-4 mt-4 mt-md-0">
      <Services />
      <WeOffer data={weoffer} />
      <Deals data={deals} />
      <Shop data={shopWithCategories} />
      <FilterByCategory
        isReversed={false}
        isBg={false}
        text="Featured Products"
        data={deals}
        filters={firstFilter}
      />
      <DoubleBanner />
      <FilterByCategory
        isReversed={true}
        isBg={true}
        text="shop now"
        data={deals}
        filters={secondFilter}
      />
      <SingleBanner />
      <Blogs data={blogs} />
    </div>
  );
};

export default Home;
