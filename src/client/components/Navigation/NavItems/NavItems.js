import React, { useEffect, useState } from 'react';

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
	desktop: {
		flexFlow: 'row',
	},
	phone: {
		flexFlow: 'column',
	}
});

const NavItems = ( props ) => {

	const [links, setLinks] = useState([]);
	useEffect(() => {
		setLinks(generateLinks());
	}, [props.user]);

	const classes = style();
	const navClasses = props.display === display.DESKTOP ? [classes.root, classes.desktop] : [classes.root, classes.phone];
	return (
		<div className={navClasses.join(' ')}>
			{links.map(( elem, key ) => <NavItem display={props.display} key={key} link={elem.link}
														   exact={elem.exact}>{elem.name}</NavItem>)}
		</div>
	);
};

export default NavItems;
