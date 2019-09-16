import React from "react";
import { SiteHeader } from "@baltimorecounty/dotgov-components";
import YourGovernmentSection from "../components/sections/YourGovernmentSection";
import MostPopularServicesSection from "../components/sections/MostPopularServicesSection";

const HomePage = () => (
  <React.Fragment>
    <SiteHeader
      heading="Baltimore County"
      subHeading="Government"
      status="Beta"
    />
    <MostPopularServicesSection />
    <YourGovernmentSection />
  </React.Fragment>
);

export default HomePage;
