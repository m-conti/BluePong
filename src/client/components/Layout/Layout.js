import React, { useState, Fragment } from 'react';

import classes from './Layout.css';

import { connect } from 'react-redux';
import { SnackbarProvider } from 'notistack';

import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import AppBar from '../Navigation/AppBar/AppBar';
import Notifier from '../../containers/Notifier/Notifier';

const Layout = ( props ) => {


	const [state, setState] = useState({
		sideDrawer: false,
	});

	const sideDrawerToggleHandler = ( open ) => {
		if ( typeof (open) === 'undefined' )
			setState({...state, sideDrawer: !state.sideDrawer});
		else
			setState({...state, sideDrawer: Boolean(open)});
	};

	return (
		<Fragment>
			<AppBar drawerToggleClicked={sideDrawerToggleHandler} user={props.user} />
			<SideDrawer
				user={props.user}
				open={state.sideDrawer}
				toggle={sideDrawerToggleHandler}/>
			<SnackbarProvider maxSnack={4} autoHideDuration={2500}>
				<main className={classes.Content}>
					{props.children}
				</main>
				<Notifier />
			</SnackbarProvider>
		</Fragment>
	);
};

const mapStateToProps = state => ({
	user: state.user,
});

export default connect(mapStateToProps)(Layout);
