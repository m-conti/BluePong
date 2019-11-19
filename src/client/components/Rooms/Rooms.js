import React, { useState, useEffect } from 'react';

import * as propTypes from 'prop-types';
import roomType from '../../propTypes/room/room';

import classes from './Rooms.css';

import RoomsList from './RoomsList/RoomsList';
import CreateNewRoom from './CreateNewRoom/CreateNewRoom';

import { withRouter } from 'react-router-dom';

const Rooms = ( props ) => {

	const roomList = props.rooms ?
		<RoomsList rooms={props.rooms} onDeleteRoom={props.deleteRoom} onJoinRoom={props.joinRoom} user={props.user} />
		: null;

	return (
		<div className={classes.Rooms}>
			{roomList}
			<CreateNewRoom create={props.createRoom}/>
		</div>
	);
};

Rooms.propTypes = {
	createRoom: propTypes.func.isRequired,
	deleteRoom: propTypes.func.isRequired,
	joinRoom: propTypes.func.isRequired,
	rooms: propTypes.arrayOf(roomType),
};

export default withRouter(Rooms);
