import React from "react";
import { SiteNavigation } from "@baltimorecounty/dotgov-components";

const links = [
  { href: "/public-works", text: "Public Works", icon: "far fa-trash" },
  { href: "/adoptable-pets", text: "Adoptable Pets", icon: "far fa-paw" },
  { href: "/images", text: "Images", icon: "far fa-images" },
  { href: "/accordions", text: "Accordions", icon: "far fa-angle-down" },
  { href: "/alerts", text: "Alerts", icon: "far fa-exclamation-triangle" },
  { href: "/cards", text: "Cards", icon: "far fa-id-card" }
];

const SiteNav = props => <SiteNavigation links={links} />;

export default SiteNav;
