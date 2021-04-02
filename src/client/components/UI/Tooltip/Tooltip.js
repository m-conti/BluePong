import { withStyles } from '@material-ui/styles';
import Tooltip from '@material-ui/core/Tooltip';

const style = {
  tooltip: {
    padding: 10,
    boxShadow: '0 0 15px 0 rgb(0 0 0 / 40%)',
    fontSize: 12,
  }
};

export default withStyles(style)(Tooltip);