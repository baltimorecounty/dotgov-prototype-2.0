import React from "react";
import {
  IconHeading,
  EmphasizedImage
} from "@baltimorecounty/dotgov-components";
const SectionYourGovernment = props => (
  <div class="dg_section">
    <div class="container">
      <div className="row">
        <div className="col">
          <IconHeading text="Your Government" icon="fa fa-university" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <EmphasizedImage
            imageSrc="//baltimorecountymd.gov/sebin/t/t/homepage-county-executive.jpg"
            imageHeader="County Executive"
            imageSubHeader="Johnny Olszewski"
            imageLink="https://www.w3schools.com"
          ></EmphasizedImage>
        </div>
        <div class="col">
          <EmphasizedImage
            imageSrc="//baltimorecountymd.gov/sebin/v/m/homepage-county-council.jpg"
            imageHeader="Legislature"
            imageSubHeader="County Council"
            imageLink="www.w3schools.com"
          ></EmphasizedImage>
        </div>
      </div>
    </div>
  </div>
);

export default SectionYourGovernment;
