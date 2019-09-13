import React from "react";

const DefaultInternalTemplate = props => {
  const { MainContent, SideBar, mainContentTitle, sideBarTitle } = props;
  return (
    <div className="dg_internal-template">
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
    </div>
  );
};

export default DefaultInternalTemplate;
