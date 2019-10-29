import React from "react";
import DefaultInternalTemplate from "../templates/DefaultInternalTemplate";
import {
  Breadcrumbs,
  BreadcrumbItem,
  BreadcrumbLinkItem,
  IconHeading,
  IconButton,
  Section,
  SummaryList
} from "@baltimorecounty/dotgov-components";

const sideBarContent = [
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

const DemoModal = props => {
  const {
    isDismissible,
    id,
    title = "My Modal",
    buttonText = "Open Modal"
  } = props;

  console.log(isDismissible);

  return (
    <React.Fragment>
      <button
        type="button"
        className="dg_button dg_modal__open-button"
        data-target={id}
      >
        {buttonText}
      </button>
      <div
        className="dg_modal hidden"
        data-dismissible={isDismissible}
        id={id}
        role="dialog"
        aria-labelledby={`${id}_label`}
        aria-modal="true"
      >
        <div className="text-right">
          <IconButton
            size="tiny"
            shape="circle"
            icon="far fa-times"
            description="Close this modal window."
            className="dg_modal__close-button"
          />
        </div>
        <IconHeading
          id="my-accessible-dialog_label"
          text={title}
          icon="fas fa-star"
        />
        <p>
          This is content that lives inside of a Modals. It's fully accessible
          which makes our users happy. And because it's inside of a modal that
          pops up, it makes our designers and UX people happy as well.
        </p>
      </div>
    </React.Fragment>
  );
};

const mainContent = () => (
  <React.Fragment>
    <Section>
      <h3>Default Modal</h3>
      <p>Modal can close by button or clicking outside of the modal.</p>
      <DemoModal id="default-modal" isDismissible="true" />
    </Section>
    <Section>
      <h3>Modal must use a button to close.</h3>
      <p>
        Modal can only be closed by a close button click located within the
        modal. A good case for this usage is a form that you don't want the user
        to lose data.
      </p>
      <DemoModal id="default-modal-not-dismissible" isDismissible="false" />
    </Section>
  </React.Fragment>
);

const sideBar = () => <SummaryList items={sideBarContent} />;

const breadCrumbs = () => (
  <Breadcrumbs>
    <BreadcrumbLinkItem text="Departments" link="/departments" />
    <BreadcrumbLinkItem text="Department of Cards" link="/departments/health" />
    <BreadcrumbItem text="Cards" />
  </Breadcrumbs>
);

const ModalPage = props => {
  return (
    <DefaultInternalTemplate
      pageTitle="Modals"
      Breadcrumbs={breadCrumbs}
      MainContent={mainContent}
      SideBar={sideBar}
    />
  );
};

export default ModalPage;
