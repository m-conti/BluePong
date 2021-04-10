import React, { useState, useEffect } from 'react';

import { isString } from 'lodash';

import { Dialog, DialogContent, DialogActions, DialogTitle } from '@material-ui/core';
import Button from '../UI/Button/Button';
import TextField from '../UI/TextField/TextField';

import classes from './SetName.css';

import { withRouter } from 'react-router-dom';
import { ROUTE_REGEX, NAME_REGEX } from '../../../constants/regex';

const DEFAULT_STATE = { name: '', loading: false };

const isValidName = (name) => isString(name) && NAME_REGEX.test(name);

const SetName = ( props ) => {

	const [state, setState] = useState(DEFAULT_STATE);

	const { groups: { playerName = null, roomId = null } = {} } = ROUTE_REGEX.exec(props.location.hash) || {};

	const routeName = isValidName(playerName) && playerName;
	console.log(routeName, props.name);

	useEffect(() => {
		if (props.name !== routeName && isValidName(routeName) && !props.roomId) {
			props.setName(routeName);
		}
		else if (props.name && roomId) {
			props.history.push(`#${roomId}[${props.name}]`);
		}
		else if (props.name) {
			props.history.push(`#[${props.name}]`);
		}
		else {
			props.history.push('#');
		}
	}, [props.name, routeName]);


	const changeName = (event) => {
		if (!isValidName(event.target.value) && event.target.value.length) { return; }
		setState({
			...state,
			name: event.target.value,
			loading: false,
		});
	};

	const setName = () => {
		if (!(isValidName(state.name))) { return; }
		setState({
			...state,
			loading: true
		});
		props.setName(state.name);
	};

	return (
		<Dialog open={!props.name}>
			<DialogTitle className={classes.dialogTitle}>
				Enter your name
			</DialogTitle>
			<DialogContent>
				<TextField
					autoFocus
					fullWidth
					id='name'
					inputProps={{
						maxLength: 10,
					}}
					label='Name'
					onChange={changeName}
					type='text'
					value={state.name}
				/>
			</DialogContent>
			<DialogActions className={classes.setNameButton}>
				<Button color={'primary'} onClick={setName}>Set Name</Button>
			</DialogActions>
		</Dialog>
	);
};

export default withRouter(SetName);
