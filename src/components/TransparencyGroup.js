import React from 'react';
import { IconLink } from '@baltimorecounty/dotgov-components';

const TransparencyGroup = (props) => {
	const { transparencyItems = [] } = props;
	return (
		<React.Fragment>
			{transparencyItems.map((transparencyItem) => (
				<div className="col-xl-3 col-lg-6">
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
