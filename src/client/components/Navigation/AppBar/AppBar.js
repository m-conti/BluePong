import React from 'react';

import Media from 'react-media';
import * as query from '../../../../constants/query';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar as MaterialBar, Toolbar, Button, IconButton, Typography } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		backgroundColor: '#282232',
	},
	title: {
		flexGrow: 1,
	},
});

const AppBar = ( props ) => {
	const classes = useStyles();
	return (
		<MaterialBar position="static" classes={classes}>
			<Toolbar>
				<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
					<MenuIcon/>
				</IconButton>
				<Typography variant="h6" className={classes.title}>
					News
				</Typography>
				<Button color="inherit">Login</Button>
			</Toolbar>
		</MaterialBar>
	);
};

export default AppBar;
