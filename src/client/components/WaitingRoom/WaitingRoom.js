import React from 'react';

import * as propTypes from 'prop-types';
import roomType from '../../propTypes/room/room';

import classes from './WaitingRoom.css';

import Button from '../UI/Button/Button';
import PlayersList from './PlayersList/PlayersList';


const WaitingRoom = (props) => {

	const startGameButton = props.playerId === props.room.master._id ? <Button
		disabled={!props.room.canLaunch}
		onClick={props.startGame}>Start Game</Button> : null;

	return (
		<div className={classes.WaitingRoom}>
			<div className={classes.TitleWaitingRoom}><h1>{props.room.name ? props.room.name : props.room.master.name + "'s room"}</h1></div>
			<PlayersList
				masterId={props.room.master._id}
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
