import React from "react";
import MostPopularServicesSection from "../components/sections/MostPopularServicesSection";
import SiteFooter from "../components/SiteFooter";
import YourGovernmentSection from "../components/sections/YourGovernmentSection";

const HomePage = () => (
  <React.Fragment>
    <MostPopularServicesSection />
    <YourGovernmentSection />
    <SiteFooter />
  </React.Fragment>
);

export default HomePage;
