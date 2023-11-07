import React, { useEffect } from "react";
// react router dom
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
// data
import { categoriesFooter, linksFooter } from "./data/data";
// shared layout
import OfferHeader from "./components/layout/offerHeader/OfferHeader";
import SettingsHeader from "./components/layout/settingsHeader/SettingsHeader";
import MainHeader from "./components/layout/mainHeader/MainHeader";
import CategoriesHeader from "./components/layout/categoriesHeader/CategoriesHeader";
import Footer from "./components/layout/footer/Footer";
import NewsLetter from "./components/layout/newsLetter/NewsLetter";
const App = () => {
  // handle scroll to top after page change
  function ScrollToTopAfterChangePage() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }
  return (
    <Router>
      {/*shared layout*/}
      <ScrollToTopAfterChangePage />
      <OfferHeader />
      <SettingsHeader />
      <MainHeader />
      <CategoriesHeader />
      <NewsLetter />
      <Footer categories={categoriesFooter} link={linksFooter} />
    </Router>
  );
};

export default App;
