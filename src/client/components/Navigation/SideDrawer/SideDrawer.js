import React from 'react';

import classes from './SideDrawer.css';

import Media from 'react-media';
import { query, display } from '../../../../constants/display';

import { Backdrop, SwipeableDrawer } from '@material-ui/core';
import NavItems from '../NavItems/NavItems';

const sideDrawer = ( props ) => (
	<Media query={query.PHONE}>
		<div>
			<SwipeableDrawer open={props.open} onClose={() => props.toggle(false)} onOpen={() => props.toggle(true)}>
				<div className={classes.SideDrawer}>
					<NavItems display={display.PHONE} user={props.user} />
				</div>
			</SwipeableDrawer>
		</div>
	</Media>
);

export default sideDrawer;
