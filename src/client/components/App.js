import React, { useEffect } from 'react';
import * as propTypes from 'prop-types';

import { Switch, Route } from 'react-router-dom';

import Rooms from '../containers/Rooms/Rooms';
import Room from '../containers/Room/Room';
import Tetris from '../containers/Tetris/Tetris';


const app = ( props ) => {

	useEffect(() => {
		props.ping();
	}, []);

	return (
		<div>
			<Switch>
				<Route exact path={'/room'} component={Room}/>
				<Route path={'/rooms'} component={Rooms}/>
				<Route exact path={'/'} component={Tetris}/>
			</Switch>
		</div>
	);
};

app.propTypes = {
	ping: propTypes.func,
};


export default app;
