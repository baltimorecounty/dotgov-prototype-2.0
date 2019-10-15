import React from "react";
import MostPopularServices from "../MostPopularServices";
import { Section } from "@baltimorecounty/dotgov-components";

const MostPopularServicesSection = props => (
  <Section
    className="dark"
    backgroundImage="//baltimorecountymd.gov/sebin/b/v/homepage-most-popular-background.jpg"
  >
    <div className="container">
      <div className="row">
        <div className="col">
          <MostPopularServices />
        </div>
      </div>
    </div>
  </Section>
);

export default MostPopularServicesSection;
