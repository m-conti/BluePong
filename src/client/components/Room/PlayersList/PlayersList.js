import React from 'react';

import * as propTypes from 'prop-types';
import playerType from '../../../propTypes/player/player';

import classes from './PlayersList.css';

import PlayerCard from './PlayerCard/PlayerCard';


const playersList = ( props ) => {

	console.log(props.players);
	const cards = props.players.map(( player ) => <PlayerCard key={props.playerId} playerId={props.playerId} {...player} />);
	return (
		<div className={classes.PlayersList}>
			{cards}
		</div>
	);
};

playersList.propTypes = {
	players: propTypes.arrayOf(playerType).isRequired,
};

export default playersList;
