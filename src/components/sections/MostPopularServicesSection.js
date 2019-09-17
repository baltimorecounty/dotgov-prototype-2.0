import React from "react";
import MostPopularServices from "../MostPopularServices";
import { Section } from "@baltimorecounty/dotgov-components";

const MostPopularServicesSection = props => (
  <Section className="dark">
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
