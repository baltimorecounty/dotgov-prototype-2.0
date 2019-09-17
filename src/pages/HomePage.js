import React from "react";
import { SiteHeader } from "@baltimorecounty/dotgov-components";
import MostPopularServicesSection from "../components/sections/MostPopularServicesSection";
import NewsRoomSection from "../components/sections/NewsRoomSection";
import TransparencySection from "../components/sections/TransparencySection";
import YourGovernmentSection from "../components/sections/YourGovernmentSection";

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
    <TransparencySection />
  </React.Fragment>
);

export default HomePage;
