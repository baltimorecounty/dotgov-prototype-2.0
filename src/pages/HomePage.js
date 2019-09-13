import React from "react";
import MostPopularServices from "../components/MostPopularServices";
import SectionYourGovernment from "../Sections/SectionYourGovernment";

const HomePage = () => (
  <div className="dg_section dark">
    <div className="container">
      <div className="row">
        <div className="col">
          <MostPopularServices />
        </div>
        <div>
          <div className="App">
            <SectionYourGovernment></SectionYourGovernment>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
