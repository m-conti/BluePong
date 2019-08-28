import React, { useEffect, useState } from 'react';
import { withSnackbar } from 'notistack';


const Notifier = ( props ) => {

	const [displayed, setDisplayed] = useState([]);

	useEffect(() => {
		const newDisplay = [...displayed];
		for ( let notificationKey in props.notifications ) {
			const notification = props.notifications[notificationKey];
			if ( !displayed.find(( elemDisplayed ) => elemDisplayed._id === notification._id) ) {
				console.log('ADD ', notification);
				newDisplay.push(notification);
				props.enqueueSnackbar(notification.message, {
					variant: notification.status,
					onClose: ( event, reason, key ) => {
						props.dismissNotification(notification._id);
					},
				});
			}
		}
		for ( let displayedKey in displayed ) {
			const displayedNotification = displayed[displayedKey];
			if ( !props.notifications.find(( elem ) => elem._id === displayedNotification._id) ) {
				console.log('REMOVE ', displayedNotification._id);
				newDisplay.splice(newDisplay.findIndex(( elem ) => elem._id === displayedNotification._id), 1);
			}
		}
		setDisplayed(newDisplay);
	}, [props.notifications]);

	return <div/>;
};

export default withSnackbar(Notifier);
