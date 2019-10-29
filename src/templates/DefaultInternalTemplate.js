import React from "react";
import {
  Alert,
  PageHeader,
  SideBarSection
} from "@baltimorecounty/dotgov-components";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const DefaultInternalTemplate = props => {
  const {
    Breadcrumbs,
    MainContent,
    SideBarContent,
    mainContentTitle,
    pageTitle,
    pagePreTitle,
    deck,
    theme,
    backgroundImage
  } = props;
  return (
    <div className="dg_internal-template">
      <SiteHeader />
      <Alert type="emergency">
        <p>
          The water cooler outside of the Budget and Finance Office has been
          moved to the Historic Courthouse Mezzanine. For more information
          please visit our <a href="/closings">Closings Page</a>
        </p>
      </Alert>
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
              {mainContentTitle && <h2>{mainContentTitle}</h2>}
              <MainContent />
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <SideBarSection title="Contact Us">{SideBarContent}</SideBarSection>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
};

export default DefaultInternalTemplate;
