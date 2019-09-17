import React from "react";

import MostPopularServicesSection from "../components/sections/MostPopularServicesSection";
import NewsRoomSection from "../components/sections/NewsRoomSection";
import TransparencySection from "../components/sections/TransparencySection";
import YourGovernmentSection from "../components/sections/YourGovernmentSection";

const HomePage = () => (
  <React.Fragment>
    <MostPopularServicesSection />
    <YourGovernmentSection />
    <NewsRoomSection />
    <TransparencySection />
  </React.Fragment>
);

export default HomePage;
