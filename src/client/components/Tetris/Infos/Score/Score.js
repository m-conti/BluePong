import React, { useEffect } from 'react';
import * as propTypes from 'prop-types';

import classes from '../Infos.css';

const Score = ( props ) => {

	return (
		<div className={classes.Part}>
			<p className={classes.Title}>Score</p>
			<p className={classes.Value}>{props.score}</p>
		</div>
	);
};

Score.propTypes = {
	score: propTypes.number.isRequired,
};

export default Score;
