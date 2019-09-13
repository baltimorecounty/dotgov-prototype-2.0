import React from "react";
import MostPopularServices from "../components/MostPopularServices";
import SiteFooter from "../components/SiteFooter";

const HomePage = () => (
  <div id="content">
    <div className="dg_section dark">
      <div className="container">
        <div className="row">
          <div className="col">
            <MostPopularServices />
          </div>
        </div>
      </div>
    </div>
    <SiteFooter />
  </div>
);

export default HomePage;
