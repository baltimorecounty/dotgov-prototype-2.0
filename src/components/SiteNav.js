import React from "react";
import { SiteNavigation } from "@baltimorecounty/dotgov-components";

const links = [
  {
    href:
      "https://baltimorecounty.github.io/dotgov-prototype-2.0/#/public-works",
    text: "Public Works",
    icon: "far fa-trash"
  },
  {
    href:
      "https://baltimorecounty.github.io/dotgov-prototype-2.0/#/adoptable-pets",
    text: "Adoptable Pets",
    icon: "far fa-paw"
  },
  {
    href: "https://baltimorecounty.github.io/dotgov-prototype-2.0/#/images",
    text: "Images",
    icon: "far fa-images"
  },
  {
    href: "https://baltimorecounty.github.io/dotgov-prototype-2.0/#/accordions",
    text: "Accordions",
    icon: "far fa-angle-down"
  },
  {
    href: "https://baltimorecounty.github.io/dotgov-prototype-2.0/#/alerts",
    text: "Alerts",
    icon: "far fa-exclamation-triangle"
  },
  {
    href: "https://baltimorecounty.github.io/dotgov-prototype-2.0/#/cards",
    text: "Cards",
    icon: "far fa-id-card"
  }
];

const SiteNav = props => <SiteNavigation links={links} />;

export default SiteNav;
