import * as actions from '../../../../actions/actionTypes/socket';
import remote from './remote';

export const ping = () => ({
	meta: remote,
	type: actions.PING,
});
