import React from "react";
import { IconLink } from "@baltimorecounty/dotgov-components";

const ServicesGroup = props => {
  const { services = [] } = props;
  return (
    <div className="container">
      <div className="row">
        {services.map(service => (
          <div className="col-4 d-flex">
            <IconLink
              key={service.id}
              text={service.name}
              href={service.href}
              icon={service.icon}
              description={service.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGroup;
