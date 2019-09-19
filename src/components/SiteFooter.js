import React from "react";
import {
  AlternateList,
  AlternateListItem,
  CountySeal,
  IconLink,
  BrandText,
  Section
} from "@baltimorecounty/dotgov-components";

import {
  FindInformationItems,
  PoliciesItems,
  TranslateItems
} from "./data/FooterData";

const LogoSection = () => (
  <div className="dg_footer-section dg_seal-container">
    <CountySeal />
  </div>
);

const BrandTextSection = () => (
  <div className="dg_footer-section">
    <BrandText header="Baltimore County" description="Government" />
  </div>
);

const LocationSection = () => (
  <div className="dg_footer-section">
    <a
      className="dg_inline-icon-link"
      href="https://www.google.com/maps?q=400+Washington+Avenue,+Towson+Maryland+21204&amp;um=1&amp;ie=UTF-8&amp;sa=X&amp;ved=0ahUKEwiOn7vd5qLgAhWpnOAKHWVfBqIQ_AUIDigB"
    >
      <i class="fa fa-map-marker-alt dg_lg_gray" aria-hidden="true"></i>
      400 Washington Avenue, Towson Maryland 21204
    </a>
  </div>
);

const BaltcoGoSection = () => (
  <div className="dg_footer-section">
    <img
      className="img-fluid"
      src="http://staging.baltimorecountymd.gov/sebin/t/o/homepage-baltcogo-logo-dark.png"
      alt="BaltCoGo Logo"
    />
  </div>
);

const DownloadSection = () => (
  <div className="dg_footer-section">
    <p className="dg_download-blurb">Download now on:</p>
    <ul class="dg_alt-list inline">
      <li>
        <a
          title="Test"
          href="https://itunes.apple.com/us/app/baltcogo/id1200046300"
        >
          <i class="fab fa-apple dg_lg_gray" aria-hidden="true"></i> App Store
        </a>
      </li>
      <li>
        <a
          title="Test"
          href="https://play.google.com/store/apps/details?id=com.citysourced.baltimorecountymd&hl=en"
        >
          <i class="fab fa-google-play dg_lg_gray" aria-hidden="true"></i>
          Google Play
        </a>
      </li>
    </ul>
  </div>
);

const SiteFooter = props => {
  return (
    <footer className="dg_county-footer">
      <Section>
        <div className="dg_brand-footer">
          <LogoSection />
          <BrandTextSection />
          <LocationSection />
          <BaltcoGoSection />
          <DownloadSection />
        </div>
        <div className="dg_footer-section">
          <div className="dg_footer-list-column">
            <h3>Find Information</h3>
            <AlternateList>
              {FindInformationItems.map(item => (
                <AlternateListItem
                  title={item.title}
                  link={item.link}
                  linkText={item.linkText}
                />
              ))}
            </AlternateList>
            <h3>Policies</h3>
            <AlternateList>
              {PoliciesItems.map(item => (
                <AlternateListItem
                  title={item.title}
                  link={item.link}
                  linkText={item.linkText}
                />
              ))}
            </AlternateList>
          </div>
          <div className="dg_footer-list-column">
            <h3>Connect With Us</h3>
            <div class="dg_social-icon_container">
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
              {TranslateItems.map(item => (
                <AlternateListItem
                  title={item.title}
                  link={item.link}
                  linkText={item.linkText}
                />
              ))}
            </AlternateList>
          </div>
        </div>
      </Section>
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
