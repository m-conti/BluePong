import React, { useState, Fragment } from 'react';

import classes from './Layout.css';

import { connect } from 'react-redux';

import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import AppBar from '../Navigation/AppBar/AppBar';

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
			<AppBar drawerToggleClicked={sideDrawerToggleHandler}/>
			<SideDrawer
				open={state.sideDrawer}
				toggle={sideDrawerToggleHandler}/>
			<main className={classes.Content}>
				{props.children}
			</main>
		</Fragment>
	);
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Layout);
