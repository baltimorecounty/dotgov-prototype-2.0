import React from 'react';
import { DateNewsCard, Button } from '@baltimorecounty/dotgov-components';
const NewsGroup = (props) => {
	const { Newsitems = [] } = props;
	return (
		<React.Fragment>
			<div className="row">
				{Newsitems.map((Newsitem) => (
					<div className="col col-xl-3 col-lg-6">
						<DateNewsCard
							key={Newsitem.id}
							date={Newsitem.date}
							headline={Newsitem.headline}
							snippet={Newsitem.snippet}
							link={Newsitem.link}
						/>
					</div>
				))}
			</div>
			<div style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
				<Button text="View all news" className="dg_button-secondary" />
			</div>
		</React.Fragment>
	);
};
export default NewsGroup;
