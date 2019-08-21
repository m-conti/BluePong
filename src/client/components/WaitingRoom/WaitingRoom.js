import React from 'react';

import * as propTypes from 'prop-types';
import roomType from '../../propTypes/room/room';

import classes from './WaitingRoom.css';

import { Button } from '@material-ui/core';
import PlayersList from './PlayersList/PlayersList';


const WaitingRoom = ( props ) => {
	const startGameButton = props.playerId === props.room.master._id ? <Button onClick={props.startGame} disabled={!props.room.canLaunch}>Start Game</Button> : null;

	return (
		<div className={classes.WaitingRoom}>
			<PlayersList playerId={props.playerId} players={props.room.players} toggleReady={props.toggleReady}/>
			{startGameButton}
		</div>
	);
};

WaitingRoom.propTypes = {
	room: roomType,
	playerId: propTypes.number.isRequired,
};

export default WaitingRoom;
