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
    sideBarTitle,
    pageTitle,
    pagePreTitle,
    deck,
    theme,
    backgroundImage
  } = props;
  return (
    <div className="dg_internal-template">
      <SiteHeader />
      <PageHeader
        Breadcrumbs={Breadcrumbs}
        title={pageTitle}
        preTitle={pagePreTitle}
        deck={deck}
        className={theme}
        backGroundImage={backgroundImage}
      />
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <div id="dg_main-content">
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
