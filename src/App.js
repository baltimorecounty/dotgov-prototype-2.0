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
    </Router>
  );
}

export default App;
