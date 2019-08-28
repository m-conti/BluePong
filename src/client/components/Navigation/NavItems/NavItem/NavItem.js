import React from 'react';

import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { display } from '../../../../../constants/display';

const style = makeStyles({
	root: {
		margin: 0,
		padding: 0,
		listStyle: 'none',
		display: 'flex',
		alignItems: 'center',
		height: '100%',
	},
	desktop: {},
	phone: {}
});

const navItem = ( props ) => {

	const classes = style();
	const navClasses = props.display === display.DESKTOP ? [classes.root, classes.desktop] : [classes.root, classes.phone];
	return (
		<div className={classes.root}>
			<NavLink
				to={props.link}
				exact={props.exact}>{props.children}</NavLink>
		</div>
	);
};
export default navItem;
