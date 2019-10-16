import React from "react";
import ServicesGroup from "../components/ServicesGroup";
import DefaultInternalTemplate from "../templates/DefaultInternalTemplate";
import {
  Breadcrumbs,
  BreadcrumbItem,
  BreadcrumbLinkItem,
  SummaryList
} from "@baltimorecounty/dotgov-components";

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
