import React from 'react';
import * as propTypes from 'prop-types';

import classes from '../Infos.css';

const Power = ( props ) => (
	<div className={classes.PowerParts}>
		<span className={classes.Title}>
			{props.name}
		</span>
		<span>
			{` (${props.description})`}
		</span>
	</div>
);

Power.propTypes = {
	description: propTypes.string.isRequired,
	name: propTypes.string.isRequired,
};

export default Power;
