import * as actionTypes from '../../../actions/actionTypes/user';

export const updateUser = (user) => ({
	type: actionTypes.CLIENT_UPDATE_USER_INFOS,
	user: user.serializeMe(),
});
