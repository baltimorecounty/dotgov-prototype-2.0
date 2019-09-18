import React from "react";
import MostPopularServices from "../MostPopularServices";
import { IconHeading, Section } from "@baltimorecounty/dotgov-components";

const MostPopularServicesSection = props => (
  <Section className="dark">
    <div className="container">
      <div className="row">
        <div className="col">
          <IconHeading
            text="Most Popular Services"
            image="//staging.baltimorecountymd.gov/sebin/h/i/seal-color-74.png"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <MostPopularServices />
        </div>
      </div>
    </div>
  </Section>
);

export default MostPopularServicesSection;
