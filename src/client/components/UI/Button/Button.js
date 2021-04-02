import { withStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { PRIMARY_COLOR } from '../../../styles/constant';

const style = {
	root: {
		color: PRIMARY_COLOR,
		margin: 20,
		boxShadow: '0 0 15px 0 rgba(63, 81, 181, 0.1)',
	}
};

export default withStyles(style)(Button);
