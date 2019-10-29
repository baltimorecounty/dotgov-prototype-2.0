import React from "react";
import { Alert } from "@baltimorecounty/dotgov-components";
import SiteNav from "../components/SiteNav";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import MostPopularServicesSection from "../components/sections/MostPopularServicesSection";
import NewsRoomSection from "../components/sections/NewsRoomSection";
import TransparencySection from "../components/sections/TransparencySection";
import YourGovernmentSection from "../components/sections/YourGovernmentSection";

const HomePage = () => (
  <React.Fragment>
    <SiteNav />
    <div id="bc_page">
      <SiteHeader />
      <Alert>
        <p>
          The water cooler outside of the Budget and Finance Office has been
          moved to the Historic Courthouse Mezzanine. For more information
          please visit our <a href="/closings">Closings Page</a>
        </p>
      </Alert>
      <MostPopularServicesSection />
      <YourGovernmentSection />
      <NewsRoomSection />
      <TransparencySection />
      <SiteFooter />
    </div>
  </React.Fragment>
);

export default HomePage;
