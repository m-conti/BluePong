import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Rooms from '../../containers/Rooms/Rooms';

const rooms = ( props ) => (
	<Switch>
		<Route component={Rooms} exact path={'/'}/>
		<Route component={Rooms} exact path={'/'}/>
	</Switch>
);

export default rooms;
