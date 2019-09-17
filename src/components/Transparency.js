import React from "react";
import TransparencyGroup from "./TransparencyGroup";
const transparencyItems = [
  {
    id: 1,
    icon: "fa fa-bullhorn",
    size: "large",
    type: "circle",
    description: "Visit our users dashboard to learn more.",
    text: "Public Notices",
    href: "https://www.w3schools.com"
  },
  {
    id: 2,
    icon: "fa fa-calendar-alt",
    size: "large",
    type: "circle",
    description: "Visit our users dashboard to learn more.",
    text: "Meetings and Events",
    href: "https://www.w3schools.com"
  },
  {
    id: 3,
    icon: "fa fa-clipboard",
    type: "circle",
    size: "large",
    description: "Visit our users dashboard to learn more.",
    text: "Boards and Commissions",
    href: "https://www.w3schools.com"
  },
  {
    id: 4,
    icon: "fa fa-chart-line",
    type: "circle",
    size: "large",
    description: "Visit our users dashboard to learn more.",
    text: "Open Data",
    href: "https://www.w3schools.com"
  }
];

const Transparency = () => (
  <TransparencyGroup transparencyItems={transparencyItems} />
);

export default Transparency;
