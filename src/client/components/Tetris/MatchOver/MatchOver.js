import React, { useState } from 'react';
import * as propTypes from 'prop-types';

import classes from './MatchOver.css';

import {
	Dialog,
	DialogContent,
	DialogActions,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell
} from '@material-ui/core';
import Button from '../../UI/Button/Button';
const matchOver = ( props ) => {

	const [state, setState] = useState({
		open: true,
	});

	const opponentScores = props.opponents ? props.opponents.map(o => (
		<TableRow key={o._id}>
			<TableCell>{o.name}</TableCell>
			<TableCell>{o.score}</TableCell>
		</TableRow>
	)) : null;

	return (
		<Dialog classes={classes.MatchOver} open={state.open} onClose={() => props.leave(props.player._id)}>
			<DialogContent>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell>Score</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell>{props.player.name}</TableCell>
							<TableCell>{props.playerScore}</TableCell>
						</TableRow>
						{opponentScores}
					</TableBody>
				</Table>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => props.leave(props.player._id)}>Leave</Button>
			</DialogActions>
		</Dialog>
	);
};

matchOver.propTypes = {
	leave: propTypes.func.isRequired,
	player: propTypes.shape({}),
}

export default matchOver;
