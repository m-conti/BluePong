import React, { useEffect } from 'react';
import * as propTypes from 'prop-types';

import Tetris from '../containers/Tetris/Tetris';

const app = ( props ) => {

	useEffect(() => {
		props.ping();
	}, []);

	return (
		<div>
			<Tetris/>
		</div>
	);
};

app.propTypes = {
	ping: propTypes.func,
};


export default app;
