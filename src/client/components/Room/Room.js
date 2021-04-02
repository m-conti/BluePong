import React from 'react';

import * as propTypes from 'prop-types';
import roomType from '../../propTypes/room/room';

import { CLIENT_ROOMS } from '../../../constants/path';
import { Redirect } from 'react-router-dom';

import WaitingRoom from '../../containers/WaitingRoom/WaitingRoom';
import Tetris from '../../containers/Tetris/Tetris';


const Room = ( props ) => {
	const room = props.rooms.find(( room ) => room._id === parseInt(props.match.params.id));
	let route;
	
	if ( !room ) {
		return <Redirect to={CLIENT_ROOMS}/>;
	}
	if ( props.playerRoomId === room._id ) {
		route = room.isPlaying ? <Tetris isMaster={props.playerId === room.master._id} /> : <WaitingRoom room={room}/>;
	}
	else {
		route = <Redirect to={CLIENT_ROOMS}/>;
	}

	return route;
};

Room.propTypes = {
	rooms: propTypes.arrayOf(roomType),
};

export default Room;
