import React from "react";
import ServicesGroup from "../components/ServicesGroup";
import DefaultInternalTemplate from "../templates/DefaultInternalTemplate";

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
    icon: "far fa-calendar-alt",
    description: "Some description goes here"
  },
  {
    id: 3,
    name: "What's Recyclable",
    href: "/whats-recyclable",
    icon: "far fa-calendar-alt",
    description: "Some description goes here"
  },
  {
    id: 4,
    name: "Road Closures",
    href: "/road-closures",
    icon: "far fa-calendar-alt",
    description: "Some description goes here"
  },
  {
    id: 5,
    name: "Sewer Issues",
    href: "/sewer-issues",
    icon: "far fa-calendar-alt",
    description: "Some description goes here"
  },
  {
    id: 6,
    name: "Current Solicitations",
    href: "/current-solicitations",
    icon: "far fa-calendar-alt",
    description: "Some description goes here"
  }
];

const mainContent = () => (
  <ServicesGroup title="Most Popular in Public Works" services={services} />
);

const sideBar = () => (
  <div style={{ background: "#f8f9fa", padding: "20px" }}>
    <p style={{ fontWeight: "900" }}>Something</p>
    <p>Some Value</p>
    <p style={{ fontWeight: "900" }}>Something</p>
    <p>Some Value</p>
    <p style={{ fontWeight: "900" }}>Something</p>
    <p>Some Value</p>
    <p style={{ fontWeight: "900" }}>Something</p>
    <p>Some Value</p>
    <p style={{ fontWeight: "900" }}>Something</p>
    <p>Some Value</p>
    <p style={{ fontWeight: "900" }}>Something</p>
    <p>Some Value</p>
  </div>
);

const InternalPage = props => {
  return (
    <DefaultInternalTemplate MainContent={mainContent} SideBar={sideBar} />
  );
};

export default InternalPage;
