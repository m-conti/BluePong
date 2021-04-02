import React from 'react';

import * as propTypes from 'prop-types';
import playerType from '../../../propTypes/player/player';

import PlayerCard from './PlayerCard/PlayerCard';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

import classes from './PlayersList.css';

const playersList = ( props ) => {
	const cards = props.players.map(( player ) => <PlayerCard
		isMaster={props.masterId === props.playerId}
		isPlayer={props.playerId === player._id}
		playerIsMaster={props.masterId === player._id}
		key={player._id}
		leaveRoom={() => props.leaveRoom(player._id)}
		toggleReady={props.toggleReady}
		{...player} />);
	return (
		<Table>
			<TableHead>
				<TableRow>
					<TableCell className={classes.LeaderColumn}></TableCell>
					<TableCell>Name</TableCell>
					<TableCell>Status</TableCell>
					<TableCell>Actions</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{cards}
			</TableBody>
		</Table>
	);
};

playersList.propTypes = {
	players: propTypes.arrayOf(playerType).isRequired,
};

export default playersList;
