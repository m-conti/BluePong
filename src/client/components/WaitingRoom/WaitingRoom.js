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
			<h1 className={classes.TitleWaitingRoom}>{props.room.name ? props.room.name : props.room.master.name + "'s room"}</h1>
			<PlayersList
				isMaster={props.playerId === props.room.master._id}
				leaveRoom={props.leaveRoom}
				playerId={props.playerId}
				players={props.room.players}
				toggleReady={props.toggleReady}/>
			{startGameButton}
		</div>
	);
};

WaitingRoom.propTypes = {
	playerId: propTypes.number.isRequired,
	room: roomType,
};

export default WaitingRoom;
