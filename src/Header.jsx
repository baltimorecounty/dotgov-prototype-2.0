import React from "react";
import {
  SiteHeader,
  LogoType,
  SiteStatus,
  Search
} from "@baltimorecounty/dotgov-components";

const Header = props => {
  return (
    <SiteHeader>
      <LogoType header="Baltimore County" description="Government"></LogoType>
      <SiteStatus status="Beta"></SiteStatus>
      <Search></Search>
    </SiteHeader>
  );
};

export default Header;
