import { withStyles } from '@material-ui/styles';
import { LinearProgress } from '@material-ui/core';
import { PRIMARY_COLOR } from '../../../styles/constant';

const style = {
	root: {
		width: '100%',
	}
};

export default withStyles(style)(LinearProgress);
