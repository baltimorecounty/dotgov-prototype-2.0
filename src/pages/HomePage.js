import React from 'react';
import MostPopularServices from '../components/MostPopularServices';
import Transparency from '../components/Transparency';

const HomePage = () => (
	<div className="dg_section">
		<div className="container">
			<div className="row">
				<div className="col">
					<MostPopularServices />
				</div>
			</div>
			<div className="row">
				<div className="col">
					<Transparency />
				</div>
			</div>
		</div>
	</div>
);

export default HomePage;
