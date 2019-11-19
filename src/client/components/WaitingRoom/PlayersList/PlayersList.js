import React from 'react';

import * as propTypes from 'prop-types';
import playerType from '../../../propTypes/player/player';

import classes from './PlayersList.css';

import PlayerCard from './PlayerCard/PlayerCard';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';


const playersList = ( props ) => {
	const cards = props.players.map(( player ) => <PlayerCard
		key={player._id}
		isPlayer={props.playerId === player._id}
		isMaster={props.isMaster}
		toggleReady={props.toggleReady}
		leaveRoom={() => props.leaveRoom(player._id)}
		{...player} />);
	return (
		<Table>
			<TableHead>
				<TableRow>
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
