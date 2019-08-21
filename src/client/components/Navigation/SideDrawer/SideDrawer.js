
import React from 'react';

import classes from './SideDrawer.css';

import Media from 'react-media';
import * as query from '../../../../constants/query';

import {Backdrop, SwipeableDrawer} from '@material-ui/core';

const sideDrawer = (props) => (
	<Media query={query.PHONE}>
		<div>
			<Backdrop open={props.open} onClick={() => props.toggle(false)}/>
			<SwipeableDrawer  open={props.open} onClose={() => props.toggle(false)} onOpen={() => props.toggle(true)}>
				<div className={classes.SideDrawer}>
					Items
				</div>
			</SwipeableDrawer>
		</div>
	</Media>
);

export default sideDrawer;
