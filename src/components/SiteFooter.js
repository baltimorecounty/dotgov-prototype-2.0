import React from "react";
import {
  AlternateList,
  AlternateListItem,
  CountySeal,
  IconLink
} from "@baltimorecounty/dotgov-components";

const SiteFooter = props => {
  return (
    <footer className="dg_county-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 dg_brand-footer">
            <div className="dg_seal-wrapper">
              <CountySeal />
            </div>
            <h1>
              <span className="dg_logo-h1">Baltimore County</span>
              <span className="dg_logo-sm-txt">Government</span>
            </h1>
            <p>
              <a href="https://www.google.com/maps?q=400+Washington+Avenue,+Towson+Maryland+21204&amp;um=1&amp;ie=UTF-8&amp;sa=X&amp;ved=0ahUKEwiOn7vd5qLgAhWpnOAKHWVfBqIQ_AUIDigB">
                <i
                  class="fa fa-map-marker-alt dg_lg_gray"
                  aria-hidden="true"
                ></i>
                400 Washington Avenue, Towson Maryland 21204
              </a>
            </p>
            <img
              className="img-fluid"
              src="http://staging.baltimorecountymd.gov/sebin/t/o/homepage-baltcogo-logo-dark.png"
              alt="BaltCoGo Logo"
            />
            <p className="dg_download-blurb">Download now on:</p>

            <ul class="dg_alt-list">
              <li>
                <a
                  title="Test"
                  href="https://itunes.apple.com/us/app/baltcogo/id1200046300"
                >
                  <i class="fab fa-apple dg_lg_gray" aria-hidden="true"></i> App
                  Store
                </a>
              </li>
              <li>
                <a
                  title="Test"
                  href="https://play.google.com/store/apps/details?id=com.citysourced.baltimorecountymd&hl=en"
                >
                  <i
                    class="fab fa-google-play dg_lg_gray"
                    aria-hidden="true"
                  ></i>{" "}
                  Google Play
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 dg_navigation-footer">
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
          <div className="col-lg-3 col-md-6 col-sm-12 dg_social-footer">
            <h3>Connect With Us</h3>
            <div class="dg_social-icon_wrapper">
              <IconLink
                size="small"
                href="#linkbutton-default"
                id="linkbutton-default"
                type="circle"
                icon="fab fa-facebook-square"
                description="Visit the Baltimore County Facebook Page"
              />

              <IconLink
                size="small"
                href="#linkbutton-default"
                id="linkbutton-default"
                type="circle"
                icon="fab fa-twitter"
                description="Visit the Baltimore County Twitter Page"
              />
              <IconLink
                size="small"
                href="#linkbutton-default"
                id="linkbutton-default"
                type="circle"
                icon="fab fa-youtube"
                description="Visit the Baltimore County YouTube Page"
              />
            </div>

            <h3>Translate</h3>
            <AlternateList>
              <AlternateListItem title="Test" link="#" linkText="Español" />
              <AlternateListItem title="Test" link="#" linkText="العربية" />
              <AlternateListItem title="Test" link="#" linkText="Français" />
              <AlternateListItem title="Test" link="#" linkText="Русский" />
              <AlternateListItem title="Test" link="#" linkText="English" />
            </AlternateList>
          </div>
        </div>
      </div>
      <div className="dg_secondary-footer">
        <div className="container">
          <div className="row">
            <div className="dg_copyright col-md-12 col-sm-12">
              © Copyright 2019 Baltimore County Government
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
