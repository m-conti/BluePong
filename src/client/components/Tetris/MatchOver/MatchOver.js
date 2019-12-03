import React, { useState } from 'react';
import * as propTypes from 'prop-types';

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
import { Grade } from '@material-ui/icons';
import Button from '../../UI/Button/Button';
const matchOver = ( props ) => {

	const [state] = useState({
		open: true,
	});

	const opponentScores = props.opponents ? props.opponents.map(o => (
		<TableRow key={o.id}>
			<TableCell>{o.name}</TableCell>
			<TableCell>{o.winner ? <Grade /> : null}</TableCell>
			<TableCell>{o.score}</TableCell>
		</TableRow>
	)) : null;

	const restartButton = props.isMaster ? <Button onClick={props.restart}>Restart</Button> : null;
	const winnerIcon = props.winner ? <Grade /> : null;
	return (
		<Dialog onClose={() => props.leave(props.player._id)} open={state.open}>
			<DialogContent>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell>Winner</TableCell>
							<TableCell>Score</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell>{props.player.name}</TableCell>
							<TableCell>{winnerIcon}</TableCell>
							<TableCell>{props.playerScore}</TableCell>
						</TableRow>
						{opponentScores}
					</TableBody>
				</Table>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => props.leave(props.player._id)}>Leave</Button>
				{restartButton}
			</DialogActions>
		</Dialog>
	);
};

matchOver.propTypes = {
	leave: propTypes.func.isRequired,
	player: propTypes.shape({}),
}

export default matchOver;
