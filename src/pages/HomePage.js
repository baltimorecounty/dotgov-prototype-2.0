import React from "react";
import MostPopularServices from "../components/MostPopularServices";
import { SiteHeader } from "@baltimorecounty/dotgov-components";

const HomePage = () => (
  <React.Fragment>
    <SiteHeader
      heading="Baltimore County"
      subHeading="Government"
      status="Beta"
    />
    <div className="dg_section dark">
      <div className="container">
        <div className="row">
          <div className="col">
            <MostPopularServices />
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default HomePage;
