import React from 'react';
import * as propTypes from 'prop-types';

import classes from '../Infos.css';

const Power = ( props ) => (
	<div className={classes.Part}>
		<p className={classes.Title}>{props.name}</p>
		<p className={classes.Value}>{props.description}</p>
	</div>
);

Power.propTypes = {
	description: propTypes.string.isRequired,
	name: propTypes.string.isRequired,
};

export default Power;
