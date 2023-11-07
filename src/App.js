import React, { useEffect } from "react";
// react router dom
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import OfferHeader from "./components/layout/offerHeader/OfferHeader";
import SettingsHeader from "./components/layout/settingsHeader/SettingsHeader";
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
    </Router>
  );
};

export default App;
