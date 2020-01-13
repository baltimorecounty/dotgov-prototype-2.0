import React from "react";
import List from "./List";
import DefaultInternalTemplate from "../templates/DefaultInternalTemplate";
import {
  Breadcrumbs,
  BreadcrumbItem,
  BreadcrumbLinkItem,
  SummaryList,
  Card,
  CardContent,
  CardFooter,
  Section
} from "@baltimorecounty/dotgov-components";

const servicesItems = [
  {
    name: "Adopt a pet",
    url: "https://www.google.com/maps",
    department: "Animal Services",
    icon: "fas fa-star"
  },

  {
    name: "Find a lost pet",
    url: "https://www.google.com/maps",
    department: "Animal Services",
    icon: "far fa-clock"
  },
  {
    name: "Apply for a job with baltimore county",
    url: "https://www.google.com/maps",
    department: "Office of Human Resources",
    icon: "far fa-envelope"
  },
  {
    name: "Pay property taxes",
    url: "https://www.google.com/maps",
    department: "Office of budget and Finance",
    icon: "fas fa-mobile-alt"
  },
  {
    name: "find a county park",
    url: "https://www.google.com/maps",
    department: "Department of Recreation and Parks",
    icon: "fas fa-exclamation-circle"
  },
  {
    name: "pay parking, speed camera or red light tickets",
    url: "https://www.google.com/maps",
    department: "Office of Budget and Finance",
    icon: "fas fa-user"
  },
  {
    name: "county news",
    url: "https://www.google.com/maps",
    department: "Office of Communications",
    icon: "fas fa-user"
  },
  {
    name: "Find transh and recycling shedule",
    url: "https://www.google.com/maps",
    department: "Department of public works",
    icon: "fas fa-user"
  },
  {
    name: "complete your jury questionaire",
    url: "https://www.google.com/maps",
    department: "Circuit Court",
    icon: "fas fa-user"
  },
  {
    name: "public information act request",
    url: "https://www.google.com/maps",
    department: "Office of Law",
    icon: "fas fa-user"
  },
  {
    name: "open data portal",
    url: "https://www.google.com/maps",
    department: "County Executive",
    icon: "fas fa-user"
  },
  {
    name: "List of County holidays",
    url: "https://www.google.com/maps",
    department: "Office of Communications",
    icon: "fas fa-user"
  }
];

const ImagePlaceholder = ({ height = "150px", width = "100%" }) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
    focusable="false"
    role="img"
    aria-label="Placeholder: Thumbnail"
  >
    <rect width={width} height={height} fill="#C2C2C2"></rect>
  </svg>
);

const SampleCard2 = props => {
  const { icon, name, department, url } = props;

  return (
    <div className="d-flex col-lg-4 col-md-6 col-sm-6">
      <Card>
        <CardContent>
          <div className="dg_icon-container">
            <i className={icon} aria-hidden="true"></i>
          </div>
          <h3>{name}</h3>
        </CardContent>
        <CardFooter>
          <a href={url}> {department}</a>
        </CardFooter>
      </Card>
    </div>
  );
};
const compare=(a,b)=>{
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
};

const mainContent = () => {
  const sortedServicesItems =servicesItems.sort(compare);
  return (
    <React.Fragment>
      <h2>Four Cards - Image, Text and Button</h2>
      <div className="row">
      <List items={sortedServicesItems} />
        {/* <List
        items={sortedServicesItems}
        renderItem={({name,url,department,icon})=>(
          <SampleCard2
            icon={icon}
            name={name}
            department={department}
            url={url}
          />
        )}
        /> */}
      </div>
    </React.Fragment>
  );
};

//const sideBar = <SummaryList items={publicWorksSummaryItems} />;

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
      // SideBarContent={sideBar}
    />
  );
};

export default InternalPage;
