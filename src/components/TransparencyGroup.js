import React from "react";
import { IconLink } from "@baltimorecounty/dotgov-components";

const TransparencyGroup = props => {
  const { transparencyItems = [] } = props;
  return (
    <React.Fragment>
      {transparencyItems.map(transparencyItem => (
        <div key={transparencyItem.id} className="col-lg-3 col-sm-6">
          <IconLink
            id={transparencyItem.id}
            icon={transparencyItem.icon}
            type={transparencyItem.type}
            size={transparencyItem.size}
            description={transparencyItem.description}
            text={transparencyItem.text}
            href={transparencyItem.href}
          />
        </div>
      ))}
    </React.Fragment>
  );
};

export default TransparencyGroup;
