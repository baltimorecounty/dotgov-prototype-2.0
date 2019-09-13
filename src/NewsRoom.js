import React from 'react';
import { DateNewsCard, IconHeading, Button } from '@baltimorecounty/dotgov-components';

const NewsRoom = (props) => (
	<div style={{ padding: '10px' }} className="dg_section dark">
		<IconHeading text="LATEST HEADLINES" icon="fa fa-newspaper" />
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

		<div className="row mt-5" style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
			<Button text="VIEW ALL NEWS" className="dg_button-secondary" />
		</div>
	</div>
);

export default NewsRoom;
