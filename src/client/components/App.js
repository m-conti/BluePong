import React, { useEffect } from 'react';

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

export default app;
