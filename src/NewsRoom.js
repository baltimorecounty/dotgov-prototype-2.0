import React from 'react';
import {DateNewsCard, IconHeading } from '@baltimorecounty/dotgov-components';

const NewsRoom = (props) => (
	<div>
		<div>
			<IconHeading text="LATEST HEADLINES" icon="fa fa-newspaper" />
			<DateNewsCard
				date="07/29/2019"
				headline="Baltimore County Marks Progress in Rehabilitation of Winters lane Homes"
				snippet="Today Baltimore County officials joined with community and..."
				link="//www.baltimorecountymd.gov/News/BaltimoreCountyNow"
			/>
		</div>
	</div>
);

export default NewsRoom;
