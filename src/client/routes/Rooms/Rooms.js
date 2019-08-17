import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Rooms from '../../containers/Rooms/Rooms';
import Room from '../../containers/Room/Room';

const rooms = ( props ) => (
	<Switch>
		<Route component={Rooms} exact path={`${props.match.path}`}/>
		<Route component={Room} path={`${props.match.path}/:id`} />
	</Switch>
);

export default rooms;
