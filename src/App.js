import React from "react";
import "@baltimorecounty/dotgov-components/lib/styles/dotgov.min.css";

import "./index.css";
import Homepage from "./pages/HomePage";
import { HashRouter as Router, Route } from "react-router-dom";
import PublicWorksLandingPage from "./pages/PublicWorksLandingPage";
import AdoptablePetsPage from "./pages/AdoptablePetsPage";
import Images from "./pages/ImagesPage";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/public-works" component={PublicWorksLandingPage} />
      <Route exact path="/adoptable-pets" component={AdoptablePetsPage} />
      <Route exact path="/images" component={Images} />
    </Router>
  );
}

export default App;
