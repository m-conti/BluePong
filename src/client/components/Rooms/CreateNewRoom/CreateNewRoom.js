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
		const openParam = (typeof (open) === 'undefined') ? !state.showModal : open;
		setState({
			...state,
			showModal: Boolean(openParam),
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
			<Button onClick={toggleModalNewRoom} disabled={props.disabled}>Add New Room</Button>
			<Dialog onClose={() => toggleModalNewRoom(false)} open={state.showModal}>
				<DialogContent>
					<TextField
						autoFocus
						fullWidth
						id='name'
						label='Name'
						onChange={changeName}
						type='text'
						value={state.name}
					/>
					<div className={classes.labelMaxPlayer}>
						<label htmlFor='max-player'>Max Player</label>
					</div>
					<Slider id='max-player' max={4} min={1} onChange={(_, value) => changeMaxPlayer(value)}
						step={1} value={state.playerMax} valueLabelDisplay={'auto'}/>
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
	disabled: propTypes.bool.isRequired,
};

export default CreateNewRoom;
