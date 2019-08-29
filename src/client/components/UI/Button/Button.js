import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { PRIMARY_COLOR, WHITE_COLOR } from '../../../styles/constant';

const style = {
	root: {
		color: PRIMARY_COLOR,
	}
};

export default withStyles(style)(Button);
