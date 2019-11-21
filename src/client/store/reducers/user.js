import * as actions from '../../../actions/actionTypes/user';

const initialState = {
	_id: null,
	isAdmin: false,
	name: null,
	roomId: null,
};

const updateUserInfos = ( state, {user} ) => ({
	...state,
	...user,
});


const user = ( state = initialState, action ) => {

	switch ( action.type ) {

		case actions.CLIENT_UPDATE_USER_INFOS:
			return updateUserInfos(state, action);
		default :
			return state;
	}
};

export default user;
