import React from 'react';

import * as propTypes from 'prop-types';
import playerType from '../../../propTypes/player/player';

import classes from './PlayersList.css';

import PlayerCard from './PlayerCard/PlayerCard';


const playersList = ( props ) => {
	const cards = props.players.map(( player ) => <PlayerCard key={player._id} playerId={props.playerId} {...player} toggleReady={props.toggleReady} />);
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
