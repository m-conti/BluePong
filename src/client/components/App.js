import React, { useEffect } from 'react';
import * as propTypes from 'prop-types';

import { Switch, Route } from 'react-router-dom';

// routes
import RoomRoutes from '../routes/Rooms/Rooms';

import Tetris from '../containers/Tetris/Tetris';


const app = ( props ) => {

	useEffect(() => {
		props.ping();
	}, []);

	return (
		<div>
			<Switch>
				<Route exact path={'/'} component={Tetris}/>
				<Route path={'/rooms'} component={RoomRoutes}/>
			</Switch>
		</div>
	);
};

app.propTypes = {
	ping: propTypes.func,
};


export default app;
