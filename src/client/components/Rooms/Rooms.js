import React, { useState, useEffect } from 'react';

import classes from './Rooms.css';

const Rooms = ( props ) => {


	const [state, setState] = useState({});

	useEffect(() => {

	}, []);


	return (
		<div className={classes.Rooms}>
		<RoomsList />
		</div>
	);
};

export default Rooms;
