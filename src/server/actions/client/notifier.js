import * as actionTypes from '../../../actions/actionTypes/notifier';

export const displayNotification = (notification) => ({
	type: actionTypes.CLIENT_DISPLAY_NOTIFICATION,
	notification: notification
});
