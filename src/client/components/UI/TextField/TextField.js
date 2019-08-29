import { withStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
import { PRIMARY_COLOR } from '../../../styles/constant';

const style = {
	root: {
		'& label.Mui-focused': {
			color: PRIMARY_COLOR,
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: PRIMARY_COLOR,
		},
	},
};

export default withStyles(style)(TextField);
