import React from 'react';
import { DateNewsCard, IconHeading, Button } from '@baltimorecounty/dotgov-components';

const NewsRoom = (props) => (
	<div style={{ padding: '10px' }} >
		<IconHeading text="LATEST HEADLINES" icon="fa fa-newspaper" />
		<div className="dg_item-grid">
			<DateNewsCard
				date="07/29/2019"
				headline="Baltimore County Marks Progress in Rehabilitation of Winters lane Homes"
				snippet="Today Baltimore County officials joined with community and..."
				link="//www.baltimorecountymd.gov/News/BaltimoreCountyNow"
			/>
			<DateNewsCard
				date="07/29/2019"
				headline="Baltimore County Marks Progress in Rehabilitation of Winters lane Homes"
				snippet="Today Baltimore County officials joined with community and..."
				link="//www.baltimorecountymd.gov/News/BaltimoreCountyNow"
			/>
			<DateNewsCard
				date="07/29/2019"
				headline="Baltimore County Marks Progress in Rehabilitation of Winters lane Homes"
				snippet="Today Baltimore County officials joined with community and..."
				link="//www.baltimorecountymd.gov/News/BaltimoreCountyNow"
			/>
			<DateNewsCard
				date="07/29/2019"
				headline="Baltimore County Marks Progress in Rehabilitation of Winters lane Homes"
				snippet="Today Baltimore County officials joined with community and..."
				link="//www.baltimorecountymd.gov/News/BaltimoreCountyNow"
			/>
		</div>

		<div  style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
			<Button text="VIEW ALL NEWS" className="dg_button-secondary" />
		</div>
	</div>
);

export default NewsRoom;
