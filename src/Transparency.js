import React from 'react';
import { IconHeading, IconLink } from '@baltimorecounty/dotgov-components';

const Transparency = (props) => (
	<div>
		<IconHeading text="TRANSPARENCY" icon="fa fa-search-plus" />
		<IconLink
			icon="fa fa-bullhorn"
			size="large"
			type="circle"
			description="Visit our users dashboard to learn more."
			text="PUBLIC NOTICES"
			href="https://www.w3schools.com"
		/>
		<IconLink
			icon="fa fa-calendar-alt"
			size="large"
			type="circle"
			description="Visit our users dashboard to learn more."
			text="MEETING AND EVENTS"
			href="https://www.w3schools.com"
		/>
		<IconLink
			icon="fa fa-clipboard"
			type="circle"
			size="large"
			description="Visit our users dashboard to learn more."
			text="BOARDS AND COMMISSIONS"
			href="https://www.w3schools.com"
		/>
		<IconLink
			icon="fa fa-chart-line"
			type="circle"
			size="large"
			description="Visit our users dashboard to learn more."
			text="OPEN DATA"
			href="https://www.w3schools.com"
		/>
	</div>
);

export default Transparency;
