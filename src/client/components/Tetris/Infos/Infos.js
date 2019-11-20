import React from 'react';
import * as propTypes from 'prop-types';

import classes from './Infos.css';

import Score from './Score/Score';
import Power from './Power/Power';

const Infos = ( props ) => {

	const power = props.power ? <Power {...props.power} /> : null;
	return (
		<div className={classes.Infos}>
			<Score score={props.score} />
			{power}
		</div>
	);
};

Infos.propTypes = {
	power: propTypes.shape({
		name: propTypes.string.isRequired,
		description: propTypes.string.isRequired,
	}),
	score: propTypes.number.isRequired,
};

export default Infos;
