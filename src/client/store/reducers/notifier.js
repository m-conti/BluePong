import * as actions from '../../../actions/actionTypes/notifier';
import generateId from '../../../helpers/utilities/generateId';

const initialState = {
	notifications: [],
};

const dismissNotification = ( state, {id} ) => ({
	...state,
	notifications: state.notifications.filter(( notification ) => notification._id !== id),
});

const displayNotification = ( state, {notification: {message, status}} ) => ({
	...state,
	notifications: [...state.notifications, {_id: generateId(state.notifications), message: message, status: status}],
});

const notifier = ( state = initialState, action ) => {

	switch ( action.type ) {

		case actions.CLIENT_DISPLAY_NOTIFICATION:
			return displayNotification(state, action);
		case actions.CLIENT_DISMISS_NOTIFICATION:
			return dismissNotification(state, action);
		default :
			return state;
	}
};

export default notifier;
