import React from "react";
import { AlternateList } from "@baltimorecounty/dotgov-components";
import { AlternateListItem } from "@baltimorecounty/dotgov-components";

const SiteFooter = props => {
  return (
    <footer className="dg_county-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 mt-5 mb-4 about-footer">
            <div className="mb-3">
              <img
                src="http://staging.baltimorecountymd.gov/sebin/h/i/seal-color-74.png"
                alt="Baltimore County Seal"
              />
            </div>
            <h1>
              <span className="logo-h1">Baltimore County</span>
              <span className="logo-sm-txt">Government</span>
            </h1>
            <p className="mt-5">
              <a href="https://www.google.com/maps?q=400+Washington+Avenue,+Towson+Maryland+21204&amp;um=1&amp;ie=UTF-8&amp;sa=X&amp;ved=0ahUKEwiOn7vd5qLgAhWpnOAKHWVfBqIQ_AUIDigB">
                <i class="fa fa-map-marker-alt" aria-hidden="true"></i> 400
                Washington Avenue, Towson Maryland 21204
              </a>
            </p>
            <img
              className="mb-2 img-fluid"
              src="http://staging.baltimorecountymd.gov/sebin/t/o/homepage-baltcogo-logo-dark.png"
              alt="BaltCoGo Logo"
            />
            <p className="download-blurb">Download now on:</p>
          </div>
          <div className="col-lg-3 col-md-3 mt-5 mb-4 social-footer">
            <h3>Find Information</h3>
            <AlternateList>
              <AlternateListItem
                title="Find a County Service"
                link="#"
                linkText="Find a County Service"
              />
              <AlternateListItem
                title="Phone Numbers"
                link="#"
                linkText="Phone Numbers"
              />
              <AlternateListItem
                title="Report a Problem"
                link="#"
                linkText="Report a Problem"
              />
              <AlternateListItem
                title="Directions"
                link="#"
                linkText="Directions"
              />
            </AlternateList>

            <h3>Policies</h3>
            <AlternateList>
              <AlternateListItem
                title="User Terms"
                link="#"
                linkText="User Terms"
              />
              <AlternateListItem title="Privacy" link="#" linkText="Privacy" />
              <AlternateListItem
                title="Reasonable Accomodation"
                link="#"
                linkText="Reasonable Accomodation"
              />
            </AlternateList>
          </div>
          <div className="col-lg-3 col-md-3 mt-5 mb-4 navigation-footer">
            <h3>Connect With Us</h3>
            <h3>Translate</h3>
            <AlternateList>
              <AlternateListItem title="Test" link="#" linkText="Test" />
              <AlternateListItem title="Test" link="#" linkText="Test" />
              <AlternateListItem title="Test" link="#" linkText="Test" />
            </AlternateList>
          </div>
        </div>
      </div>
      <div className="dg_secondary-footer">
        <div className="container">
          <div className="row">
            <div className="copyright col-md-12 col-sm-12">
              © Copyright 2019 Baltimore County Government
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
