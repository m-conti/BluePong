import React, { useEffect } from 'react';

import classes from './Score.css';

const Score = ( props ) => {

	useEffect(() => {
	}, []);


	return (
		<div className={classes.Score}>
			<p> This will be a score </p>
		</div>
	);
};

export default Score;
