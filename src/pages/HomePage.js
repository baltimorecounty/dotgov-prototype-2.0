import React from 'react';
import YourGovernmentSection from '../components/sections/YourGovernmentSection';
import MostPopularServicesSection from '../components/sections/MostPopularServicesSection';
import NewsRoomSection from '../components/sections/NewsRoomSection';
import TransparencySection from '../components/sections/TransparencySection';
const HomePage = () => (
	<React.Fragment>
		<MostPopularServicesSection />
		<YourGovernmentSection />
		<NewsRoomSection />
		<TransparencySection />
	</React.Fragment>
);

export default HomePage;
