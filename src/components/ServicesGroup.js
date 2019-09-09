import React from "react";
import { IconLink } from "@baltimorecounty/dotgov-components";

const ServicesGroup = props => {
  const { services = [], title = "Most Popular Services" } = props;
  return (
    <div className="dg_popular-services">
      <h2>{title}</h2>
      <div className="dg_item-grid">
        {services.map(service => (
          <IconLink
            key={service.id}
            text={service.name}
            href={service.href}
            icon={service.icon}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesGroup;
