import remote from './remote';
import * as actions from '../../../../actions/actionTypes/room';

export const getRoom = () => ({
	meta: remote,
	type: actions.SERVER_GET_ROOM,
});
