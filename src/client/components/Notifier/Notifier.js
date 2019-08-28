import React, { useEffect, useState } from 'react';
import { withSnackbar } from 'notistack';
import { Button} from '@material-ui/core';

const Notifier = ( props ) => {

	const [displayed, setDisplayed] = useState([]);

	useEffect(() => {
		const newDisplay = [...displayed];
		for ( let notificationKey in props.notifications ) {
			const notification = props.notifications[notificationKey];
			if ( !displayed.find(( elemDisplayed ) => elemDisplayed._id === notification._id) ) {
				newDisplay.push(notification);
				props.enqueueSnackbar(notification.message, {
					variant: notification.status,
					action: () => (
						<Button onClick={() => props.dismissNotification(notification._id)}>dismiss</Button>
					),
					key: notification._id,
					onClose: ( event, reason, key ) => {
						props.dismissNotification(notification._id);
					},
				});
			}
		}
		for ( let displayedKey in displayed ) {
			const displayedNotification = displayed[displayedKey];
			if ( !props.notifications.find(( elem ) => elem._id === displayedNotification._id) ) {
				newDisplay.splice(displayedKey, 1);
				props.closeSnackbar(displayedNotification._id);
			}
		}
		setDisplayed(newDisplay);
	}, [props.notifications]);

	return <div/>;
};

export default withSnackbar(Notifier);
