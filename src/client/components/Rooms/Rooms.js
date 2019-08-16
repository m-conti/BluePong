import React, { useState, useEffect } from 'react';
import * as propTypes from 'prop-types';

import classes from './Rooms.css';

import RoomsList from './RoomsList/RoomsList';
import CreateNewRoom from './CreateNewRoom/CreateNewRoom';

const Rooms = ( props ) => {


	const [state, setState] = useState({});

	useEffect(() => {
		props.getRooms();
	}, []);
	console.log('CHANGE');

	const roomList = props.rooms ?
		<RoomsList rooms={props.rooms} onDeleteRoom={props.deleteRoom} onJoinRoom={props.joinRoom}/>
		: null;

	return (
		<div className={classes.Rooms}>
			{roomList}
			<CreateNewRoom create={props.createRoom} />
		</div>
	);
};

Rooms.propTypes = {
	getRooms: propTypes.func.isRequired,
	createRoom: propTypes.func.isRequired,
	deleteRoom: propTypes.func.isRequired,
	joinRoom: propTypes.func.isRequired,
	rooms: propTypes.arrayOf(propTypes.shape({
		_id: propTypes.number.isRequired,
		players:propTypes.arrayOf(propTypes.shape({

		})).isRequired
	}).isRequired)
};

export default Rooms;
