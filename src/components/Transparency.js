import React from 'react';
import TransparencyGroup from './TransparencyGroup';
const transparencyItems = [
	{
		id: 1,
		icon: 'fa fa-bullhorn',
		size: 'large',
		type: 'circle',
		description: 'Visit our users dashboard to learn more.',
		text: 'PUBLIC NOTICES',
		href: 'https://www.w3schools.com'
	},
	{
		id: 2,
		icon: 'fa fa-calendar-alt',
		size: 'large',
		type: 'circle',
		description: 'Visit our users dashboard to learn more.',
		text: 'MEETING AND EVENTS',
		href: 'https://www.w3schools.com'
	},
	{
		id: 3,
		icon: 'fa fa-clipboard',
		type: 'circle',
		size: 'large',
		description: 'Visit our users dashboard to learn more.',
		text: 'BOARDS AND COMMISSIONS',
		href: 'https://www.w3schools.com'
	},
	{
		id: 4,
		icon: 'fa fa-chart-line',
		type: 'circle',
		size: 'large',
		description: 'Visit our users dashboard to learn more.',
		text: 'OPEN DATA',
		href: 'https://www.w3schools.com'
	}
];

const Transparency = () => <TransparencyGroup transparencyItems={transparencyItems} />;

export default Transparency;
