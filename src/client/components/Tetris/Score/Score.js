import React, { useEffect } from 'react';
import * as propTypes from 'prop-types';

import classes from './Score.css';

const Score = ( props ) => {

	useEffect(() => {
	}, []);


	return (
		<div className={classes.Score}>
			<p> This will be a score : {props.score}</p>
		</div>
	);
};

Score.propTypes = {
	score: propTypes.number.isRequired,
};

export default Score;
