import React from 'react';
import { DateNewsCard } from '@baltimorecounty/dotgov-components';
const NewsGroup = (props) => {
	const { Newsitems = [] } = props;
	return (
		<React.Fragment>
			{Newsitems.map((Newsitem) => (
				<div className="col-xl-3 col-lg-6 d-flex">
					<DateNewsCard
						key={Newsitem.id}
						date={Newsitem.date}
						headline={Newsitem.headline}
						snippet={Newsitem.snippet}
						link={Newsitem.link}
					/>
				</div>
			))}
		</React.Fragment>
	);
};
export default NewsGroup;
