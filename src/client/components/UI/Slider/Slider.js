import { withStyles } from '@material-ui/styles';
import { Slider } from '@material-ui/core';
import { PRIMARY_COLOR } from '../../../styles/constant';

const style = {
	root: {
		color: PRIMARY_COLOR,
	}
};

export default withStyles(style)(Slider);
