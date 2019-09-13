import React from "react";
import MostPopularServices from "../components/MostPopularServices";
import SectionYourGovernment from "../Sections/SectionYourGovernment";

const HomePage = () => (
  <React.Fragment>
    <div className="dg_section dark">
      <div className="container">
        <div className="row">
          <div className="col">
            <MostPopularServices />
          </div>
        </div>
      </div>
    </div>
    <SectionYourGovernment />
  </React.Fragment>
);

export default HomePage;
