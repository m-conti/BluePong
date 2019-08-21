import React, { useEffect } from 'react';
import * as propTypes from 'prop-types';

import { Switch, Route, Redirect } from 'react-router-dom';

// routes
import { CLIENT_ROOMS } from '../../constants/path';
import RoomRoutes from '../routes/Rooms/Rooms';

import Tetris from '../containers/Tetris/Tetris';


const app = ( props ) => {

	useEffect(() => {
		props.ping();
		props.getRooms();
	}, []);

	return (
		<div>
			<Switch>
				<Route path={CLIENT_ROOMS} component={RoomRoutes}/>
			</Switch>
		</div>
	);
};

app.propTypes = {
	getRooms: propTypes.func.isRequired,
	ping: propTypes.func.isRequired,
};


export default app;
