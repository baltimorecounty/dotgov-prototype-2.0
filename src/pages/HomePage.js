import React from 'react';
import MostPopularServices from '../components/MostPopularServices';
import NewsRoom from '../components/NewsRoom';
const HomePage = () => (
	<div className="dg_section dark">
		<div className="container">
			<div className="row">
				<div className="col">
					<MostPopularServices />
				</div>
			</div>
			<div className="row">
				<div className="col">
					<NewsRoom />
				</div>
			</div>
		</div>
	</div>
);

export default HomePage;
