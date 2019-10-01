import React from "react";
import { PageHeader } from "@baltimorecounty/dotgov-components";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const DefaultInternalTemplate = props => {
  const {
    Breadcrumbs,
    MainContent,
    SideBar,
    mainContentTitle,
    sideBarTitle
  } = props;
  return (
    <div className="dg_internal-template">
      <SiteHeader />
      <PageHeader
        Breadcrumbs={Breadcrumbs}
        title="Public Works"
        preTitle="Department of"
        deck="The Department of Public Works oversees and maintains the County’s public infrastructure, including highways, utilities, and trash and recycling."
        className="blue"
        backGroundImage="//baltimorecountymd.gov/sebin/j/x/public-works-header.jpg"
      />
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <div className="dg_main-content">
              <h2>{mainContentTitle}</h2>
              <MainContent />
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="dg_sidebar sidebar">
              <h2>{sideBarTitle || "Contact Us"}</h2>
              <SideBar />
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
};

export default DefaultInternalTemplate;
