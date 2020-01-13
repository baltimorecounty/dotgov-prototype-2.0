import React from "react";
import "@baltimorecounty/dotgov-components/lib/styles/dotgov.min.css";

import "./index.css";
import Homepage from "./pages/HomePage";
import { HashRouter as Router, Route } from "react-router-dom";
import PublicWorksLandingPage from "./pages/PublicWorksLandingPage";
import AlertsPage from "./pages/AlertsPage";
import AdoptablePetsPage from "./pages/AdoptablePetsPage";
import ImagesPage from "./pages/ImagesPage";
import AccordionsPage from "./pages/AccordionsPage";
import CardPage from "./pages/CardPage";
import CardPage2 from "./pages/CardPage2";
import CardPage3 from "./pages/CardPage3";
import ModalPage from "./pages/ModalPage";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/public-works" component={PublicWorksLandingPage} />
      <Route exact path="/adoptable-pets" component={AdoptablePetsPage} />
      <Route exact path="/images" component={ImagesPage} />
      <Route exact path="/accordions" component={AccordionsPage} />
      <Route exact path="/alerts" component={AlertsPage} />
      <Route exact path="/cards" component={CardPage} />
      <Route exact path="/cards2" component={CardPage2} />
      <Route exact path="/cards3" component={CardPage3} />
      <Route exact path="/modals" component={ModalPage} />
    </Router>
  );
}

export default App;
