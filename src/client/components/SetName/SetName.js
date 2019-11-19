import React, { useState } from 'react';
import { Dialog, DialogContent, DialogActions } from '@material-ui/core';
import Button from '../UI/Button/Button';
import TextField from '../UI/TextField/TextField';

const SetName = ( props ) => {

	const [state, setState] = useState({
		name: '',
	});

	const changeName = (event) => {
		setState({
			...state,
			name: event.target.value,
			loading: false,
		});
	};

	const setName = () => {
		if (!state.name.length) { return; }
		setState({
			...state,
			loading: true
		});
		props.setName(state.name);
	};

	return (
		<Dialog open={!props.name}>
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
			</DialogContent>
			<DialogActions>
				<Button color={'primary'} onClick={setName}>Set Name</Button>
			</DialogActions>
		</Dialog>
	);
};

export default SetName;
