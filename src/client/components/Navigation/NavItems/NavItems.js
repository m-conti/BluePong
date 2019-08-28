import React from 'react';

import NavItem from './NavItem/NavItem';
import { generateLinks } from '../../../helpers/routes/links';
import { makeStyles } from '@material-ui/core';
import { display } from '../../../../constants/display';


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

const navItems = ( props ) => {

	const classes = style();
	const navClasses = props.display === display.DESKTOP ? [classes.root, classes.desktop] : [classes.root, classes.phone];
	return (
		<div className={navClasses.join(' ')}>
			{generateLinks().map(( elem, key ) => <NavItem display={props.display} key={key} link={elem.link}
														   exact={elem.exact}>{elem.name}</NavItem>)}
		</div>
	);
};

export default navItems;
