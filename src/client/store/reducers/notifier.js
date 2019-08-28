import * as actions from '../../../actions/actionTypes/notifier';

const initialState = {
	notification = [],
};

const user = ( state = initialState, action ) => {

	switch ( action.type ) {

		case actions.DISPLAY_NOTIFICATION:
			return state;
		case action.DISMISS_NOTIFICATION:
			return state;
		default :
			return state;
	}
};

export default user;
