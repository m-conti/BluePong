import remote from './remote';
import * as actions from '../../../../actions/actionTypes/rooms';

export const getRoom = (id) => ({
	meta: remote,
	type: actions.SERVER_GET_ROOM,
	id: id,
});
