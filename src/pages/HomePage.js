import React from "react";

import SectionYourGovernment from "../Sections/SectionYourGovernment";
import MostPopularServicesSection from "../components/sections/MostPopularServicesSection";

const HomePage = () => (
  <React.Fragment>
    <MostPopularServicesSection />
    <SectionYourGovernment />
  </React.Fragment>
);

export default HomePage;
