import React from "./node_modules/react";
import {
  IconHeading,
  EmphasizedImage,
  GridExample
} from "./node_modules/@baltimorecounty/dotgov-components";
const SectionYourGovernment = props => (
  <div>
    <div>
      <IconHeading text="Your Government" icon="fa fa-university"></IconHeading>
    </div>
    <div className="dg_section">
      <div className="container">
        <div className="row">
          <div className="col">
            <EmphasizedImage
              imageSrc="//baltimorecountymd.gov/sebin/t/t/homepage-county-executive.jpg"
              imageHeader="County Executive"
              imageSubHeader="Johnny Olszewski"
              imageLink="https://www.w3schools.com"
            ></EmphasizedImage>
          </div>
          <div className="col">
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
  </div>
);

export default SectionYourGovernment;
