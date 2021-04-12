import React, { useEffect } from 'react';

import * as propTypes from 'prop-types';
import roomType from '../../propTypes/room/room';

import { CLIENT_ROOMS } from '../../../constants/path';
import { Redirect } from 'react-router-dom';

import WaitingRoom from '../../containers/WaitingRoom/WaitingRoom';
import Tetris from '../../containers/Tetris/Tetris';


const Room = ( props ) => {
	const room = props.rooms.find(( room ) => room._id === props.id);

	useEffect(() => {
		if (room && !props.playerRoomId) {
			props.joinRoom(room._id);
		}
	}, []);

	if (!room) {
		return <Redirect to={CLIENT_ROOMS}/>;
	}
	if ( props.playerRoomId === room._id ) {
		return room.isPlaying ? <Tetris isMaster={props.playerId === room.master._id} /> : <WaitingRoom room={room}/>;
	}
	return <Redirect to={CLIENT_ROOMS}/>;
};

Room.propTypes = {
	rooms: propTypes.arrayOf(roomType),
};

export default Room;
