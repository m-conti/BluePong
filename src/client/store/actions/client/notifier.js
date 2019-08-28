import * as actions from '../../../../actions/actionTypes/notifier';

export const dismissNotification = (id) => ({
	type: actions.CLIENT_DISMISS_NOTIFICATION,
	id: id,
});
