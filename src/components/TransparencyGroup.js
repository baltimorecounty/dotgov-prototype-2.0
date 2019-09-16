import React from 'react';
import { IconLink } from '@baltimorecounty/dotgov-components';

const TransparencyGroup = (props) => {
	const { transparencyItems = [] } = props;
	return (
  <div className="dg_item-grid">
			{transparencyItems.map((transparencyItem) => (
				<IconLink
					id={transparencyItem.id}
					icon={transparencyItem.icon}
					type={transparencyItem.type}
					size={transparencyItem.size}
					description={transparencyItem.description}
					text={transparencyItem.text}
					href={transparencyItem.href}
				/>
			))}
      </div>
	);
};

export default TransparencyGroup;
