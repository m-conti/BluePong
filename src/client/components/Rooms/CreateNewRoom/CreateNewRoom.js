import React, {useState} from 'react';

import * as propTypes from 'prop-types';

import classes from './CreateNewRoom.css';

import { Dialog, DialogActions, DialogContent } from '@material-ui/core';
import TextField from '../../UI/TextField/TextField';
import Slider from '../../UI/Slider/Slider';
import Button from '../../UI/Button/Button';

const CreateNewRoom = (props) => {


	const [state, setState] = useState({
		showModal: false,
		name: '',
		playerMax: 2,
	});


	const toggleModalNewRoom = (open) => {
		if (typeof (open) === 'undefined') open = !state.showModal;
		setState({
			...state,
			showModal: Boolean(open),
		});
	};

	const changeName = (event) => {
		setState({
			...state,
			name: event.target.value,
		});
	};

	const changeMaxPlayer = (value) => {
		if (value !== state.playerMax) {
			setState({...state, playerMax: value});
		}
	};

	return (
		<div className={classes.CreateNewRoom}>
			<Button onClick={toggleModalNewRoom}>Add New Room</Button>
			<Dialog open={state.showModal} onClose={() => toggleModalNewRoom(false)}>
				<DialogContent>
					<TextField
						autoFocus
						id="name"
						label="Name"
						type="text"
						value={state.name}
						onChange={changeName}
						fullWidth
					/>
					<label htmlFor="max-player">Max Player</label>
					<Slider id="max-player" value={state.playerMax} max={4} min={1} step={1} valueLabelDisplay={'auto'}
						onChange={(_, value) => changeMaxPlayer(value)}/>
				</DialogContent>
				<DialogActions>
					<Button color={'primary'}
							onClick={() => props.create({name: state.name, playerMax: state.playerMax})}>
						Create
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

CreateNewRoom.propTypes = {
	create: propTypes.func.isRequired,
};

export default CreateNewRoom;
