import React from 'react';

import * as propTypes from 'prop-types';
import roomType from '../../propTypes/room/room';

import classes from './WaitingRoom.css';

import {Button} from '@material-ui/core';
import PlayersList from './PlayersList/PlayersList';


const WaitingRoom = (props) => {

	const startGameButton = props.playerId === props.room.master._id ? <Button
		disabled={!props.room.canLaunch}
		onClick={props.startGame}>Start Game</Button> : null;

	return (
		<div className={classes.WaitingRoom}>
			<PlayersList playerId={props.playerId}
				players={props.room.players}
				isMaster={props.playerId === props.room.master._id}
				toggleReady={props.toggleReady}
				leaveRoom={props.leaveRoom}/>
			{startGameButton}
		</div>
	);
};

WaitingRoom.propTypes = {
	room: roomType,
	playerId: propTypes.number.isRequired,
};

export default WaitingRoom;
