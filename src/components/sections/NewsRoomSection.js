import React from 'react';
import NewsRoom from '../NewsRoom';
import { Button, Section } from '@baltimorecounty/dotgov-components';
const ctaButton = <Button text="View all news" className="dg_button-secondary" />;
const NewsRoomSection = (props) => (
	<div className="dg_section dark">
		<div className="container">
			<div className="row">
				<div className="col">
					<Section className="dark" ctaButton={ctaButton}>
						<NewsRoom />
					</Section>
				</div>
			</div>
		</div>
	</div>
);

export default NewsRoomSection;
