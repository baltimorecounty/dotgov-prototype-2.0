import React from "react";
import ServicesGroup from "../components/ServicesGroup";
import DefaultInternalTemplate from "../templates/DefaultInternalTemplate";
import {
  Breadcrumbs,
  BreadcrumbItem,
  BreadcrumbLinkItem,
  SummaryList
} from "@baltimorecounty/dotgov-components";

const services = [
  {
    id: 1,
    name: "Trash and Recycling Schedule",
    href: "/trash-and-recycling-schedule",
    icon: "far fa-calendar-alt",
    description: "Some description goes here"
  },
  {
    id: 2,
    name: "Trash and Recycling Facilities",
    href: "/trash-and-recycling-facilities",
    icon: "fas fa-trash",
    description: "Some description goes here"
  },
  {
    id: 3,
    name: "What's Recyclable",
    href: "/whats-recyclable",
    icon: "fas fa-recycle",
    description: "Some description goes here"
  },
  {
    id: 4,
    name: "Road Closures",
    href: "/road-closures",
    icon: "fas fa-traffic-cone",
    description: "Some description goes here"
  },
  {
    id: 5,
    name: "Sewer Issues",
    href: "/sewer-issues",
    icon: "fas fa-poo",
    description: "Some description goes here"
  },
  {
    id: 6,
    name: "Current Solicitations",
    href: "/current-solicitations",
    icon: "fas fa-briefcase",
    description: "Some description goes here"
  }
];

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
  <div id="dg_main-content">
    <img
      src="//baltimorecountymd.gov/sebin/t/t/homepage-county-executive.jpg"
      alt="County Executive Olzsewski delivers a speech."
    />
    <img
      className="dg_image left"
      src="//baltimorecountymd.gov/sebin/t/t/homepage-county-executive.jpg"
      alt="County Executive Olzsewski delivers a speech."
    />
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting of Lorem
      Ipsum.industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five
    </p>
    <img
      className="dg_image right"
      src="//baltimorecountymd.gov/sebin/t/t/homepage-county-executive.jpg"
      alt="County Executive Olzsewski delivers a speech."
    />
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting of Lorem
      Ipsum.industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five
    </p>
  </div>
);

const sideBar = () => <SummaryList items={publicWorksSummaryItems} />;

const breadCrumbs = () => (
  <Breadcrumbs>
    <BreadcrumbLinkItem text="Departments" link="/departments" />
    <BreadcrumbLinkItem
      text="Department of Images"
      link="/departments/health"
    />
    <BreadcrumbItem text="Big Small Left and Right Images" />
  </Breadcrumbs>
);

const InternalPage = props => {
  return (
    <DefaultInternalTemplate
      pageTitle="Images"
      Breadcrumbs={breadCrumbs}
      MainContent={mainContent}
      SideBar={sideBar}
    />
  );
};

export default InternalPage;
