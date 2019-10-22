import React from "react";
import DefaultInternalTemplate from "../templates/DefaultInternalTemplate";
import {
  Breadcrumbs,
  BreadcrumbItem,
  BreadcrumbLinkItem,
  SummaryList,
  Alert
} from "@baltimorecounty/dotgov-components";

const publicWorksSummaryItems = [
  {
    id: 1,
    icon: "fas fa-map-marker-alt",
    heading: "Main Office",
    content:
      "<p> 111 West Chesapeake Avenue<br /> Suite 307<br /> Towson, Maryland 21204</p>"
  },

  {
    id: 2,
    icon: "far fa-clock",
    heading: "Hours:",
    content: "<p>Monday through Friday<br />8 a.m. to 4:30 p.m.</p>"
  },
  {
    id: 3,
    icon: "far fa-envelope",
    heading: "Email:",
    content: "<p><a href=`#`>publicworks@​baltimorecountymd.gov</a></p>"
  },
  {
    id: 4,
    icon: "fas fa-mobile-alt",
    heading: "Phone:",
    content:
      "<p><a href=`tel:410-887-6789`>410-887-6789</a></p><p><h3>Emergency Dispatch:</h3></p><p><a href=`tel:410-887-6789`>410-887-6789</a></p>"
  },
  {
    id: 5,
    icon: "fas fa-exclamation-circle",
    heading: "BALTCOGO311",
    content: " <p><a href=`#`>Report a problem</a> online.</p>"
  },
  {
    id: 6,
    icon: "fas fa-user",
    heading: "Director:",
    content: "<p>Steve Walsh, P.E.</p>"
  }
];

const mainContent = () => (
  <React.Fragment>
    <h3>Success</h3>
    <Alert className="status" type="success" icon="far fa-check">
      <p>
        You submitted your report as and it was a great success. View your{" "}
        <a href="#">report status</a>.
      </p>
    </Alert>
    <h3>Information</h3>
    <Alert className="status" type="information" icon="far fa-check">
      <p>
        You submitted your report as and it was a great success. View your{" "}
        <a href="#">report status</a>.
      </p>
    </Alert>
    <h3>Warning</h3>
    <Alert className="status" type="warning" icon="far fa-check">
      <p>
        You submitted your report as and it was a great success. View your{" "}
        <a href="#">report status</a>.
      </p>
    </Alert>
    <h3>Error</h3>
    <Alert className="status" type="error" icon="far fa-check">
      <p>
        You submitted your report as and it was a great success. View your{" "}
        <a href="#">report status</a>.
      </p>
    </Alert>
  </React.Fragment>
);
const sideBar = () => <SummaryList items={publicWorksSummaryItems} />;

const breadCrumbs = () => (
  <Breadcrumbs>
    <BreadcrumbLinkItem text="Departments" link="/departments" />
    <BreadcrumbLinkItem text="Department of Cards" link="/departments/health" />
    <BreadcrumbItem text="Cards" />
  </Breadcrumbs>
);

const InternalPage = props => {
  return (
    <DefaultInternalTemplate
      pageTitle="Cards"
      Breadcrumbs={breadCrumbs}
      MainContent={mainContent}
      mainContentTitle="Status Alerts"
      SideBar={sideBar}
    />
  );
};

export default InternalPage;
