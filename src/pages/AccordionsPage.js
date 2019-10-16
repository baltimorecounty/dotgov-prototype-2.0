import React from "react";
import DefaultInternalTemplate from "../templates/DefaultInternalTemplate";
import {
  Breadcrumbs,
  BreadcrumbItem,
  BreadcrumbLinkItem,
  SummaryList,
  Accordion,
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

const collapseItems = [
  {
    id: 1,
    header: "Accordion Item #1",
    subheader: "This is a subheader",
    content: <h2>Test Heading Level 2</h2>
  },
  {
    id: 2,
    header: "Accordion Item #2",
    subheader: "",
    content: (
      <p>
        Lorem ipsum dolor amet live-edge laborum ullamco hot chicken do,{" "}
        <a href="ww3.schools.com">tilde sint dolore anim enamel</a> pin tumeric
        try-hard yr echo park thundercats. Enim next level keffiyeh ramps.
      </p>
    )
  },
  {
    id: 3,
    header: "Accordion Item #3",
    subHeader: "",
    content: (
      <ul>
        <li>Vexillologist</li>
        <li>Etsy four dollar toast</li>
        <li>
          Gochujang minim pitchfork cliche sriracha distillery taiyaki et hoodie
          copper mug ethical normcore labore ennui
        </li>
      </ul>
    )
  },
  {
    id: 4,
    header: "Accordion Item #4",
    subheader: "",
    content: (
      <img
        width="300"
        height="200"
        alt="Stuff goes here"
        src="//baltimorecountymd.gov/sebin/t/t/homepage-county-executive.jpg"
        border="0"
        vspace="0"
        hspace="0"
      />
    )
  },
  {
    id: 5,
    header: "Accordion Item #5",
    subheader: "",
    content: <h3>90's prism seitan</h3>
  },
  {
    id: 6,
    header: "Accordion Item #6",
    subheader: "",
    content: (
      <p>
        <strong>Gluten-free, green juice four dollar toast</strong> hashtag
        quinoa occupy tofu chia officia banh mi.
      </p>
    )
  },
  {
    id: 7,
    header: "Accordion Item #7",
    subheader: "",
    content: <h3>Plaid knausgaard slow-carb</h3>
  },
  {
    id: 8,
    header: "Accordion Item #8",
    subheader: "",
    content: (
      <p>
        Pour-over sartorial fashion axe, qui normcore biodiesel post-ironic.
        Taxidermy paleo thundercats air plant brunch whatever. Hell of
        vexillologist semiotics, portland hella tattooed beard celiac eu craft
        beer. Gentrify farm-to-table humblebrag anim knausgaard. Sint organic
        voluptate, craft beer.
      </p>
    )
  },
  {
    id: 9,
    header: "Accordion Item #9",
    subheader: "",
    content: <p>Jean shorts plaid food truck austin leggings fashion axe.</p>
  },
  {
    id: 10,
    header: "Accordion Item #10",
    subheader: "",
    content: (
      <button type="button" className="dg_button">
        Click Me
      </button>
    )
  }
];

const mainContent = () => (
  <div>
    <Section>
      <Accordion collapseItems={collapseItems} />
    </Section>
    <Section className="dark">
      <Accordion collapseItems={collapseItems} />
    </Section>
  </div>
);

const sideBar = () => <SummaryList items={publicWorksSummaryItems} />;

const breadCrumbs = () => (
  <Breadcrumbs>
    <BreadcrumbLinkItem text="Departments" link="/departments" />
    <BreadcrumbLinkItem
      text="Department of Accordions"
      link="/departments/health"
    />
    <BreadcrumbItem text="Light and Dark Accordions" />
  </Breadcrumbs>
);

const InternalPage = props => {
  return (
    <DefaultInternalTemplate
      pageTitle="Accordions"
      Breadcrumbs={breadCrumbs}
      MainContent={mainContent}
      SideBar={sideBar}
    />
  );
};

export default InternalPage;
