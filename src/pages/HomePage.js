import React from "react";

import YourGovernmentSection from "../components/sections/YourGovernmentSection";
import MostPopularServicesSection from "../components/sections/MostPopularServicesSection";

const HomePage = () => (
  <React.Fragment>
    <MostPopularServicesSection />
    <YourGovernmentSection />
  </React.Fragment>
);

export default HomePage;
