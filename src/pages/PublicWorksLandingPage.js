import React from "react";
import ServicesGroup from "../components/ServicesGroup";
import DefaultInternalTemplate from "../templates/DefaultInternalTemplate";
import {
  Breadcrumbs,
  BreadcrumbItem,
  BreadcrumbLinkItem,
  Section,
  StepList,
  StepListItem,
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

const SampleStepListItems = () => (
  <React.Fragment>
    <StepListItem id="step-1" buttonText="Step 1: Know the Registration Fees">
      <p>Some really helpful content for step 1 will go here.</p>
    </StepListItem>
    <StepListItem id="step-2" buttonText="Step 2: Have Your Property Inspected">
      <p>Some really helpful content for step 2 will go here.</p>
    </StepListItem>
    <StepListItem
      id="step-3"
      buttonText="Step 3: Gather Required Documentation"
    >
      <p>Some really helpful content for step 3 will go here.</p>
    </StepListItem>
  </React.Fragment>
);

const mainContent = () => (
  <React.Fragment>
    <Section>
      <ServicesGroup title="Most Popular in Public Works" services={services} />
    </Section>
    <Section>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Default Step List</h2>
            <StepList type="collapsed">
              <SampleStepListItems />
            </StepList>
          </div>
        </div>
      </div>
    </Section>
    <Section className="dark">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Default Step List</h2>
            <StepList type="collapsed">
              <SampleStepListItems />
            </StepList>
          </div>
        </div>
      </div>
    </Section>
    <Section>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Static Step List</h2>
            <StepList type="static">
              <SampleStepListItems />
            </StepList>
          </div>
        </div>
      </div>
    </Section>
    <Section className="dark">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Static Step List</h2>
            <StepList type="static">
              <SampleStepListItems />
            </StepList>
          </div>
        </div>
      </div>
    </Section>
  </React.Fragment>
);

const sideBar = () => <SummaryList items={publicWorksSummaryItems} />;

const breadCrumbs = () => (
  <Breadcrumbs>
    <BreadcrumbLinkItem text="Departments" link="/departments" />
    <BreadcrumbLinkItem
      text="Department of Health"
      link="/departments/health"
    />
    <BreadcrumbItem text="Adoptable Pets" />
  </Breadcrumbs>
);

const InternalPage = props => {
  return (
    <DefaultInternalTemplate
      pagePreTitle="Department of"
      pageTitle="Public Works"
      deck="The Department of Public Works oversees and maintains the County’s public infrastructure, including highways, utilities, and trash and recycling."
      theme="blue"
      backgroundImage="//baltimorecountymd.gov/sebin/j/x/public-works-header.jpg"
      Breadcrumbs={breadCrumbs}
      MainContent={mainContent}
      SideBar={sideBar}
    />
  );
};

export default InternalPage;
