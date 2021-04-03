import React, { useEffect } from 'react';
import * as propTypes from 'prop-types';

import { Switch, Route, Redirect } from 'react-router-dom';

// routes
import { CLIENT_ROOMS } from '../../constants/path';
import RoomRoutes from '../routes/Rooms/Rooms';

// layout
import Layout from './Layout/Layout';

// hotreload
import { hot } from 'react-hot-loader/root';

const app = ( props ) => {

	useEffect(() => {
		props.ping();
		props.getRooms();
	}, []);

	return (
		<div>
			<Layout>
				<Switch>
					<Route component={RoomRoutes} path={CLIENT_ROOMS}/>
					<Redirect to={CLIENT_ROOMS} />
				</Switch>
			</Layout>
		</div>
	);
};

app.propTypes = {
	getRooms: propTypes.func.isRequired,
	ping: propTypes.func.isRequired,
};


export default hot(app);
