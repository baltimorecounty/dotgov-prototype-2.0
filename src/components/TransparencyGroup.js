import React from 'react';
import { IconLink } from '@baltimorecounty/dotgov-components';

const TransparencyGroup = (props) => {
	const { transparencyItems = [] } = props;
	return (
		<React.Fragment>
			<div className="row">
				{transparencyItems.map((transparencyItem) => (
					<div className="col .col-lg-3">
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
			</div>
		</React.Fragment>
	);
};

export default TransparencyGroup;
