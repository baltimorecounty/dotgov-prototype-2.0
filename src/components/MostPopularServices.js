import React from 'react';
import { IconHeading } from '@baltimorecounty/dotgov-components';
import ServicesGroup from './ServicesGroup';

const services = [
	{
		id: 1,
		name: 'Property Taxes',
		href: '/property-taxes',
		icon: 'fas fa-home',
		description: 'View more information about property taxes.'
	},
	{
		id: 2,
		name: 'Pet Adoption',
		href: '/pet-adoption',
		icon: 'fas fa-heart',
		description: 'View more information about pet adoption.'
	},
	{
		id: 3,
		name: 'Police News',
		href: '/police-news',
		icon: 'fas fa-shield',
		description: 'View more police news.'
	},
	{
		id: 4,
		name: 'County Jobs',
		href: '/jobs',
		icon: 'fas fa-building',
		description: 'View more information about Baltimore County jobs.'
	},
	{
		id: 5,
		name: 'County Code',
		href: '/county-code',
		icon: 'fas fa-clipboard-check',
		description: 'View more information about County Code.'
	},
	{
		id: 6,
		name: 'Trash Recycling',
		href: '/trash',
		icon: 'fas fa-dumpster',
		description: 'View more information about trash and recycling.'
	},
	{
		id: 7,
		name: 'Pay Tickets',
		href: '/pay-tickets',
		icon: 'fas fa-car',
		description: 'Pay your Baltimore county speeding and parking tickets.'
	},
	{
		id: 8,
		name: 'Property Taxes',
		href: '/property-taxes',
		icon: 'fas fa-home',
		description: 'View more information about property taxes.'
	},
	{
		id: 9,
		name: 'County Parks',
		href: '/county-parks',
		icon: 'fas fa-tree',
		description: 'View more information about county parks.'
	},
	{
		id: 10,
		name: 'View All Services',
		href: '/services',
		icon: 'fas fa-list-ul',
		description: 'View all Baltimore County services.'
	}
];

const MostPopularServices = () => (
	<React.Fragment>
		<div className="dg_section dark">
			<IconHeading
				text="Most Popular Services"
				image="//staging.baltimorecountymd.gov/sebin/h/i/seal-color-74.png"
			/>

			<ServicesGroup services={services} />
		</div>
	</React.Fragment>
);

export default MostPopularServices;
