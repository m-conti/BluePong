import React, { useState, Fragment } from 'react';

import classes from './Layout.css';

import { connect } from 'react-redux';
import { SnackbarProvider } from 'notistack';

import SetName from '../../containers/SetName/SetName';

import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import AppBar from '../Navigation/AppBar/AppBar';
import Notifier from '../../containers/Notifier/Notifier';

const Layout = ( props ) => {


	const [state, setState] = useState({
		sideDrawer: false,
	});

	const sideDrawerToggleHandler = ( open ) => {
		if ( typeof (open) === 'undefined' ) {
			setState({...state, sideDrawer: !state.sideDrawer});
		}
		else {
			setState({...state, sideDrawer: Boolean(open)});
		}
	};

	const isPlaying = props.user.roomId ? props.rooms.find(({ _id }) => _id === props.user.roomId)?.isPlaying : false;

	return (
		<Fragment>
			<AppBar drawerToggleClicked={sideDrawerToggleHandler} user={props.user} isPlaying={isPlaying} />
			<SideDrawer
				open={state.sideDrawer}
				toggle={sideDrawerToggleHandler}
				user={props.user}/>
			<SetName/>
			<SnackbarProvider autoHideDuration={2500} maxSnack={4}>
				<main className={classes.Content}>
					{props.children}
				</main>
				<Notifier/>
			</SnackbarProvider>
		</Fragment>
	);
};

const mapStateToProps = state => ({
	user: state.user,
	rooms: state.rooms.rooms
});

export default connect(mapStateToProps)(Layout);
