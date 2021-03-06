import React from "react";
import DefaultInternalTemplate from "../templates/DefaultInternalTemplate";
import {
  Breadcrumbs,
  BreadcrumbItem,
  BreadcrumbLinkItem,
  IconHeading,
  IconButton,
  Section
} from "@baltimorecounty/dotgov-components";
import SideBarContent from "../components/SampleSideBarContent";

const DemoModal = props => {
  const {
    isDismissible,
    id,
    title = "My Modal",
    buttonText = "Open Modal"
  } = props;

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
    </Section>
    <DemoModal id="default-modal" isDismissible="true" />
    <Section>
      <h3>Modal must use a button to close.</h3>
      <p>
        Modal can only be closed by a close button click located within the
        modal. A good case for this usage is a form that you don't want the user
        to lose data.
      </p>
    </Section>
    <DemoModal id="default-modal-not-dismissible" isDismissible="false" />
  </React.Fragment>
);

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
      SideBar={SideBarContent}
    />
  );
};

export default ModalPage;
