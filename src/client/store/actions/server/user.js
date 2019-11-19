import * as actions from '../../../../actions/actionTypes/user';
import remote from './remote';

export const setName = ( name ) => ({
	meta: remote,
	type: actions.SERVER_SET_NAME,
	name: name,
});
