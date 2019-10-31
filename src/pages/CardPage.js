import React from "react";
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
const SampleCard1 = () => (
  <Card>
    <CardContent>
      <svg
        width="100%"
        height="150px"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
        aria-label="Placeholder: Thumbnail"
      >
        <rect width="100%" height="200px" fill="#C2C2C2"></rect>
      </svg>
      <h3>Centered With Image</h3>
      <p>.8 acres</p>
      <p>
        <a href="https://www.google.com/maps">
          300 Lennox Avenue Room 202 Towson, Maryland 21286
        </a>
      </p>
    </CardContent>
    <CardFooter>
      <button type="button" className="dg_button">
        Learn More
      </button>
    </CardFooter>
  </Card>
);

const SampleCard2 = () => (
  <Card>
    <CardContent>
      <div className="dg_icon-container">
        <i className="fas fa-star" aria-hidden="true"></i>
      </div>
      <h3>Centered With Icon</h3>
      <p>.8 acres</p>
      <p>
        <a href="https://www.google.com/maps">
          300 Lennox Avenue Room 202 Towson, Maryland 21286
        </a>
      </p>
    </CardContent>
    <CardFooter>
      <button type="button" className="dg_button">
        Learn More
      </button>
    </CardFooter>
  </Card>
);

const SampleCard3 = () => (
  <Card>
    <CardContent className="text-left">
      <svg
        width="100%"
        height="150px"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
        aria-label="Placeholder: Thumbnail"
      >
        <rect width="100%" height="200px" fill="#C2C2C2"></rect>
      </svg>
      <h3>Align Left With Image</h3>
      <p>.8 acres</p>
      <p>
        <a href="https://www.google.com/maps">
          300 Lennox Avenue Room 202 Towson, Maryland 21286
        </a>
      </p>
    </CardContent>
    <CardFooter className="text-left">
      <button type="button" className="dg_button">
        Learn More
      </button>
    </CardFooter>
  </Card>
);

const mainContent = () => (
  <React.Fragment>
    <h2>Four Cards - Image, Text and Button</h2>
    <p>
      Bacon ipsum dolor amet leberkas meatball cow ribeye boudin porchetta
      landjaeger pork chop strip steak ball tip alcatra. Corned beef leberkas
      porchetta biltong, landjaeger bresaola shankle shank tail strip steak.
      Kielbasa beef tongue burgdoggen doner jowl. Jowl tri-tip flank biltong,
      ball tip burgdoggen pancetta meatball bacon turducken ham ground round
      capicola pastrami. Filet mignon beef ground round capicola alcatra jowl.
      Andouille meatloaf porchetta kielbasa chicken jowl.
    </p>
    <p>
      Kevin turkey shoulder meatball sirloin beef ribs, frankfurter chicken
      spare ribs turducken landjaeger ribeye brisket bresaola. Turducken
      leberkas landjaeger alcatra flank. Prosciutto jerky kevin meatball
      bresaola pancetta boudin ground round sirloin picanha flank pork belly.
      T-bone cupim pork loin bacon landjaeger beef ribs frankfurter ham shank
      hamburger.
    </p>
    <div className="row">
      <div className="d-flex col-lg-4 col-md-6 col-sm-6">
        <SampleCard1 />
      </div>

      <div className="d-flex col-lg-4 col-md-6 col-sm-6">
        <SampleCard1 />
      </div>

      <div className="d-flex col-lg-4 col-md-6 col-sm-6">
        <SampleCard1 />
      </div>

      <div className="d-flex col-lg-4 col-md-6 col-sm-6">
        <SampleCard2 />
      </div>
    </div>
    <h2>Five Cards - Various Layouts</h2>
    <div className="row">
      <div className="d-flex col-lg-4 col-md-6 col-sm-6">
        <SampleCard2 />
      </div>
      <div className="d-flex col-lg-4 col-md-6 col-sm-6">
        <SampleCard1 />
      </div>
      <div className="d-flex col-lg-4 col-md-6 col-sm-6">
        <SampleCard3 />
      </div>
      <div className="d-flex col-lg-4 col-md-6 col-sm-6">
        <SampleCard3 />
      </div>
      <div className="d-flex col-lg-4 col-md-6 col-sm-6">
        <SampleCard3 />
      </div>
    </div>
    <Section className="dark">
      <div className="container">
        <h2>Four Cards - Image, Text and Button</h2>
        <div className="row">
          <div className="d-flex col-lg-4 col-md-6 col-sm-6">
            <SampleCard1 />
          </div>

          <div className="d-flex col-lg-4 col-md-6 col-sm-6">
            <SampleCard1 />
          </div>

          <div className="d-flex col-lg-4 col-md-6 col-sm-6">
            <SampleCard1 />
          </div>

          <div className="d-flex col-lg-4 col-md-6 col-sm-6">
            <SampleCard2 />
          </div>
        </div>
        <h2>Five Cards - Various Layouts</h2>
        <div className="row">
          <div className="d-flex col-lg-4 col-md-6 col-sm-6">
            <SampleCard2 />
          </div>
          <div className="d-flex col-lg-4 col-md-6 col-sm-6">
            <SampleCard1 />
          </div>
          <div className="d-flex col-lg-4 col-md-6 col-sm-6">
            <SampleCard3 />
          </div>
          <div className="d-flex col-lg-4 col-md-6 col-sm-6">
            <SampleCard3 />
          </div>
          <div className="d-flex col-lg-4 col-md-6 col-sm-6">
            <SampleCard3 />
          </div>
        </div>
      </div>
    </Section>
  </React.Fragment>
);

const sideBar = <SummaryList items={publicWorksSummaryItems} />;

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
      SideBarContent={sideBar}
    />
  );
};

export default InternalPage;
