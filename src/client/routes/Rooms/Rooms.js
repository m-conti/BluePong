import React from 'react';
import { withRouter } from 'react-router-dom';
import { ROUTE_REGEX } from '../../../constants/regex';

import Rooms from '../../containers/Rooms/Rooms';
import Room from '../../containers/Room/Room';

const rooms = ( props ) => {
	const { groups: { roomId = null } = {} } = ROUTE_REGEX.exec(props.location.hash) || {};

	if (roomId) { return <Room id={parseInt(roomId)} /> }

	return <Rooms />

}

export default withRouter(rooms);
