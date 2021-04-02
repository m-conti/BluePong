import React from 'react';

import * as propTypes from 'prop-types';
import roomType from '../../propTypes/room/room';

import classes from './Rooms.css';

import RoomsList from './RoomsList/RoomsList';
import CreateNewRoom from './CreateNewRoom/CreateNewRoom';

import { withRouter } from 'react-router-dom';

const Rooms = ( props ) => {

	const roomList = props.rooms ?
		<RoomsList
			onDeleteRoom={props.deleteRoom}
			onJoinRoom={props.joinRoom}
			rooms={props.rooms}
			user={props.user} /> : null;

	return (
		<div className={classes.Rooms}>
			<div className={classes.TitleRooms}><h1>Rooms List</h1></div>
			{roomList}
			<CreateNewRoom create={props.createRoom} disabled={!!props.user.roomId} />
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
