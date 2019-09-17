import React from 'react';
import { Button, Section, IconHeading } from '@baltimorecounty/dotgov-components';
import NewsGroup from '../NewsGroup';
const ctaButton = <Button text="View all news" className="dg_button-secondary" />;
const News = [
	{
		id: 1,
		date: '07/29/2019',
		headline: 'Baltimore County Marks Progress in Rehabilitation of Winters lane Homes',
		snippet: 'Today Baltimore County officials joined with community and...',
		link: '//www.baltimorecountymd.gov/News/BaltimoreCountyNow'
	},
	{
		id: 2,
		date: '07/29/2019',
		headline: 'Baltimore County Marks Progress in Rehabilitation of Winters lane Homes',
		snippet: 'Today Baltimore County officials joined with community and...',
		link: '//www.baltimorecountymd.gov/News/BaltimoreCountyNow'
	},
	{
		id: 3,
		date: '07/29/2019',
		headline: 'Baltimore County Marks Progress in Rehabilitation of Winters lane Homes',
		snippet: 'Today Baltimore County officials joined with community and...',
		link: '//www.baltimorecountymd.gov/News/BaltimoreCountyNow'
	},
	{
		id: 4,
		date: '07/29/2019',
		headline: 'Baltimore County Marks Progress in Rehabilitation of Winters lane Homes',
		snippet: 'Today Baltimore County officials joined with community and...',
		link: '//www.baltimorecountymd.gov/News/BaltimoreCountyNow'
	}
];

const NewsRoomSection = (props) => (
	<Section className="dark" ctaButton={ctaButton}>
		<div className="container">
			<div className="row">
				<div className="col">
					<IconHeading text="Latest Headlines" icon="fa fa-newspaper" />
				</div>
			</div>
			<div className="row">
				<NewsGroup Newsitems={News} />
			</div>
		</div>
	</Section>
);

export default NewsRoomSection;
