import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as propTypes from 'prop-types';

import Rooms from '../../containers/Rooms/Rooms';
import Room from '../../containers/Room/Room';

const rooms = ( props ) => (
	<Switch>
		<Route component={Rooms} exact path={`${props.match.path}`}/>
		<Route component={Room} path={`${props.match.path}/:id`} />
	</Switch>
);

rooms.propTypes = {
	match: propTypes.shape({}).isRequired,
	path: propTypes.string.isRequired,
}

export default rooms;