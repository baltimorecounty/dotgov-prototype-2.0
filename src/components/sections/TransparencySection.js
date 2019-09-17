import React from 'react';
import Transparency from '../Transparency';
import { Section, IconHeading} from '@baltimorecounty/dotgov-components';

const TransparencySection = (props) => (
	<Section className="dg_section">
		<div className="container">
			<div className="row">
				<div className="col">
					<IconHeading text="TRANSPARENCY" icon="far fa-search-plus" />
				</div>
			</div>
			<div className="row">
				<Transparency />
			</div>
		</div>
	</Section>
);

export default TransparencySection;
