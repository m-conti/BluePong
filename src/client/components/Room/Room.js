import React, { useState, useEffect } from 'react';
import * as propTypes from 'prop-types';

import Button from '../UI/Button/Button';

import classes from './Room.css';

const Room = ( props ) => {

	useEffect(() => {
		props.getRoom(parseInt(props.match.params.id));
	}, []);

	const clickHandler = () => {
	};

	return (
		<div className={classes.Room}>
			<Button onClick={clickHandler}>Join The Party</Button>
		</div>
	);
};

Room.propTypes = {
};

export default Room;
