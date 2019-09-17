import React from "react";

import YourGovernmentSection from "../components/sections/YourGovernmentSection";
import MostPopularServicesSection from "../components/sections/MostPopularServicesSection";
import NewsRoomSection from "../components/sections/NewsRoomSection";

const HomePage = () => (
  <React.Fragment>
    <MostPopularServicesSection />
    <YourGovernmentSection />
    <NewsRoomSection />
  </React.Fragment>
);

export default HomePage;
