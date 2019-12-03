import React from 'react';
import * as propTypes from 'prop-types';

import {NavLink} from 'react-router-dom';
import {makeStyles} from '@material-ui/core';
import {display} from '../../../../../constants/display';
import {SECONDARY_COLOR, WHITE_COLOR, PRIMARY_COLOR, PRIMARY_COLOR_VARIANT_1 } from '../../../../styles/constant';

const style = makeStyles({
	root: {
		boxSizing: 'border-box',
		margin: 0,
		display: 'flex',
		'& a': {
			width: '100%',
			boxSizing: 'border-box',
			display: 'block',
			height: '100%',
			padding: '16px 10px',
			textDecoration: 'none',
		}
	},
	desktop: {
		'& a': {
			color: WHITE_COLOR,
			'&:hover, &:active, &.active': {
				color: SECONDARY_COLOR,
			},
		}
	},
	phone: {
		width: '200px',
		textAlign: 'center',
		'& a': {
			color: PRIMARY_COLOR,
			'&:hover, &:active, &.active': {
				color: PRIMARY_COLOR_VARIANT_1,
			},
		}
	}
});

const navItem = (props) => {

	const classes = style();
	const navClasses = props.display === display.DESKTOP ? [classes.root, classes.desktop] : [classes.root, classes.phone];
	return (
		<div className={navClasses.join(' ')}>
			<NavLink
				exact={props.exact}
				to={props.link}>{props.children}</NavLink>
		</div>
	);
};


navItem.propTypes = {
	children: propTypes.shape({}),
	display: propTypes.string,
	exact: propTypes.shape({}),
	link: propTypes.string,
};

export default navItem;
