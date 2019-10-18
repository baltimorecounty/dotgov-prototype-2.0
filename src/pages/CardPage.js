import React from "react";
import DefaultInternalTemplate from "../templates/DefaultInternalTemplate";
import {
  Breadcrumbs,
  BreadcrumbItem,
  BreadcrumbLinkItem,
  SummaryList,
  Section
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
  <Section>
    <div class="row">
      <div class="d-flex col-md-4">
        <div class="dg_card">
          <div class="dg_card__content">
            <div class="dg_icon-container">
              <i class="fas fa-star" aria-hidden="true"></i>
            </div>
            <h3>Centered With Icon</h3>
            <p>.8 acres</p>
            <p>
              <a href="https://www.google.com/maps">
                300 Lennox Avenue Room 202 Towson, Maryland 21286
              </a>
            </p>
          </div>
          <div class="dg_card__footer">
            <button type="button" class="dg_button">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div class="d-flex col-md-4">
        <div class="dg_card">
          <div class="dg_card__content">
            <svg
              width="100%"
              height="150px"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: Thumbnail"
            >
              <rect width="100%" height="200px" fill="#C2C2C2"></rect>
            </svg>
            <h3>Centered With Image</h3>
            <p>.8 acres</p>
            <p>
              <a href="https://www.google.com/maps">
                300 Lennox Avenue Room 202 Towson, Maryland 21286
              </a>
            </p>
          </div>
          <div class="dg_card__footer">
            <button type="button" class="dg_button">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div class="d-flex col-md-4">
        <div class="dg_card">
          <div class="dg_card__content text-left">
            <svg
              width="100%"
              height="150px"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: Thumbnail"
            >
              <rect width="100%" height="200px" fill="#C2C2C2"></rect>
            </svg>
            <h3>Align Left With Image</h3>
            <p>.8 acres</p>
            <p>
              <a href="https://www.google.com/maps">
                300 Lennox Avenue Room 202 Towson, Maryland 21286
              </a>
            </p>
          </div>
          <div class="dg_card__footer text-left">
            <button type="button" class="dg_button">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  </Section>
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
      SideBar={sideBar}
    />
  );
};

export default InternalPage;
