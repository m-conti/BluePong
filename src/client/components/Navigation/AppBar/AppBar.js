import React from 'react';

import Media from 'react-media';
import { query, display } from '../../../../constants/display';

import { makeStyles } from '@material-ui/core/styles';
import { PRIMARY_COLOR, WHITE_COLOR } from '../../../styles/constant';
import { AppBar as MaterialBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import NavItems from '../NavItems/NavItems';

const appBarStyle = makeStyles({
	root: {
		flexGrow: 1,
		backgroundColor: PRIMARY_COLOR,
	},
});

const style = makeStyles({
	menuButton: {},
	title: {
		flex: 1,
		color: WHITE_COLOR,
	},
	navItems: {},
	authButton: {}
});

const AppBar = ( props ) => {
	const classes = {appBar: appBarStyle(), ...style()};
	return (
		<MaterialBar classes={classes.appBar} position='static' >
			<Toolbar>
				<Media query={query.PHONE}>
					<IconButton aria-label='menu' className={classes.menuButton} color='inherit'
						edge='start' onClick={props.drawerToggleClicked}>
						<MenuIcon/>
					</IconButton>
				</Media>
				<Typography className={classes.title} variant='h6'>
					Tetriminus
				</Typography>
				<Media query={query.DESKTOP}>
					<NavItems display={display.DESKTOP} user={props.user}/>
				</Media>
			</Toolbar>
		</MaterialBar>
	);
};

export default AppBar;
