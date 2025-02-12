import React, { useEffect, useState } from 'react';
import * as propTypes from 'prop-types';

import userType from '../../../propTypes/user/user';

import { values } from 'lodash';

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
			{links.map(( elem, key ) => <NavItem display={props.display} exact={elem.exact} key={key}
				link={elem.link}>{elem.name}</NavItem>)}
		</div>
	);
};

NavItems.propTypes = {
	display: propTypes.oneOf(values(display)),
	user: userType.isRequired,
};

export default NavItems;
