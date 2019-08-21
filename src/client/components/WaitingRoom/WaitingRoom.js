import React from 'react';

import * as propTypes from 'prop-types';
import roomType from '../../propTypes/room/room';

import classes from './Room.css';

import { Redirect } from 'react-router-dom';

import { Button } from '@material-ui/core';
import PlayersList from './PlayersList/PlayersList';


const Room = ( props ) => {

	const room = props.rooms.find(( room ) => room._id === parseInt(props.match.params.id));

	const clickHandler = () => {
		console.log("props: ", props);
	};

	if ( !room ) return <Redirect to={'/rooms'}/>;

	const startGameButton = props.playerId === room.master._id ? <Button onClick={props.startGame} disabled={!room.canLaunch}>Start Game</Button> : null;

	return (
		<div className={classes.Room}>
			<PlayersList playerId={props.playerId} players={room.players} toggleReady={props.toggleReady}/>
			{startGameButton}
		</div>
	);
};

Room.propTypes = {
	rooms: propTypes.arrayOf(roomType),
	playerId: propTypes.number.isRequired,
};

export default Room;
