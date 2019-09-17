import React from "react";
import { SiteHeader } from "@baltimorecounty/dotgov-components";
import YourGovernmentSection from "../components/sections/YourGovernmentSection";
import MostPopularServicesSection from "../components/sections/MostPopularServicesSection";
import NewsRoomSection from "../components/sections/NewsRoomSection";

const HomePage = () => (
  <React.Fragment>
    <SiteHeader
      heading="Baltimore County"
      subHeading="Government"
      status="Beta"
    />
    <MostPopularServicesSection />
    <YourGovernmentSection />
    <NewsRoomSection />
  </React.Fragment>
);

export default HomePage;
