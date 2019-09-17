import React from 'react';
import NewsRoom from '../NewsRoom';
import { Button, Section, IconHeading } from '@baltimorecounty/dotgov-components';
const ctaButton = <Button text="View all news" className="dg_button-secondary" />;
const NewsRoomSection = (props) => (
	<Section className="dark" ctaButton={ctaButton}>
		<div className="container">
			<div className="row">
				<div className="col">
					<IconHeading text="Latest Headlines" icon="fa fa-newspaper" />
				</div>
			</div>
			<div className="row">
				<NewsRoom />
			</div>
		</div>
	</Section>
);

export default NewsRoomSection;
