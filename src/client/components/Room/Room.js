import React from 'react';

import * as propTypes from 'prop-types';
import roomType from '../../propTypes/room/room';

import classes from './Room.css';

import { CLIENT_ROOMS } from '../../../constants/path';
import { Redirect } from 'react-router-dom';

import WaitingRoom from '../../containers/WaitingRoom/WaitingRoom';
import Tetris from '../../containers/Tetris/Tetris';


const Room = ( props ) => {
	const room = props.rooms.find(( room ) => room._id === parseInt(props.match.params.id));
	if ( !room ) return <Redirect to={CLIENT_ROOMS}/>;
	console.log(room);
	const route = !room.isPlaying ? <WaitingRoom room={room}/> : <Tetris/>;

	return route;
};

Room.propTypes = {
	rooms: propTypes.arrayOf(roomType),
	playerId: propTypes.number.isRequired,
};

export default Room;
