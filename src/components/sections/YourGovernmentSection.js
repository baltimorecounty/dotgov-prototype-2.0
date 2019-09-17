import React from "react";
import {
  IconHeading,
  EmphasizedImage,
  Section
} from "@baltimorecounty/dotgov-components";

const YourGovernmentSection = props => (
  <Section>
    <div className="container">
      <div className="row">
        <div className="col">
          <IconHeading text="Your Government" icon="fa fa-university" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <EmphasizedImage
            imageSrc="//baltimorecountymd.gov/sebin/t/t/homepage-county-executive.jpg"
            imageHeader="County Executive"
            imageSubHeader="Johnny Olszewski"
            imageLink="https://www.w3schools.com"
          />
        </div>
        <div className="col-md-6">
          <EmphasizedImage
            imageSrc="//baltimorecountymd.gov/sebin/v/m/homepage-county-council.jpg"
            imageHeader="Legislature"
            imageSubHeader="County Council"
            imageLink="www.w3schools.com"
          />
        </div>
      </div>
    </div>
  </Section>
);

export default YourGovernmentSection;
