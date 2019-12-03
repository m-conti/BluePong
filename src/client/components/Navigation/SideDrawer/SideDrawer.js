import React from 'react';
import * as propTypes from 'prop-types';

import classes from './SideDrawer.css';

import Media from 'react-media';
import { query, display } from '../../../../constants/display';

import { SwipeableDrawer } from '@material-ui/core';
import NavItems from '../NavItems/NavItems';

const sideDrawer = ( props ) => (
	<Media query={query.PHONE}>
		<div>
			<SwipeableDrawer onClose={() => props.toggle(false)} onOpen={() => props.toggle(true)} open={props.open}>
				<div className={classes.SideDrawer}>
					<NavItems display={display.PHONE} user={props.user} />
				</div>
			</SwipeableDrawer>
		</div>
	</Media>
);

sideDrawer.propTypes = {
	open: propTypes.bool.isRequired,
	toggle: propTypes.func.isRequired,
	user: propTypes.shape({}),
}

export default sideDrawer;
