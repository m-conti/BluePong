import React from 'react';

import Media from 'react-media';
import { query, display } from '../../../../constants/display';

import { makeStyles } from '@material-ui/core/styles';
import { PRIMARY_COLOR, WHITE_COLOR } from '../../../styles/constant';
import { AppBar as MaterialBar, Toolbar, Button, IconButton, Typography } from '@material-ui/core';
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
	console.log(classes);
	return (
		<MaterialBar position="static" classes={classes.appBar}>
			<Toolbar>
				<Media query={query.PHONE}>
					<IconButton onClick={props.drawerToggleClicked} edge="start" className={classes.menuButton}
								color="inherit" aria-label="menu">
						<MenuIcon/>
					</IconButton>
				</Media>
				<Typography variant="h6" className={classes.title}>
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
