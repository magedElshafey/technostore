import React, { useEffect } from "react";
// react router dom
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
// data
import {
  categoriesFooter,
  linksFooter,
  mobileMenu,
  weoffer,
  dealsProduct,
  shopWithCategories,
} from "./data/data";
// shared layout
import OfferHeader from "./components/layout/offerHeader/OfferHeader";
import SettingsHeader from "./components/layout/settingsHeader/SettingsHeader";
import MainHeader from "./components/layout/mainHeader/MainHeader";
import CategoriesHeader from "./components/layout/categoriesHeader/CategoriesHeader";
import Footer from "./components/layout/footer/Footer";
import NewsLetter from "./components/layout/newsLetter/NewsLetter";
import MobileHeader from "./components/layout/mobileHeader/MobileHeader";
// pages
import Home from "./pages/Home";
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
      <MobileHeader links={mobileMenu} />
      <OfferHeader />
      <SettingsHeader />
      <MainHeader />
      <CategoriesHeader />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              weoffer={weoffer}
              deals={dealsProduct}
              shopWithCategories={shopWithCategories}
            />
          }
        />
      </Routes>
      <NewsLetter />
      <Footer categories={categoriesFooter} link={linksFooter} />
    </Router>
  );
};

export default App;
