import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { PRIMARY_COLOR, WHITE_COLOR } from '../../../styles/constant';

const style = {
	root: {
		color: PRIMARY_COLOR,
		margin: '10px',
	}
};

export default withStyles(style)(Button);
