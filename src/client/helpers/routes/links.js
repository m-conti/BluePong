import store from '../../store/store';
import * as path from '../../../constants/path';

const generatLink = (name, link, exact) => ({	name, link, exact });

export const generateLinks = () => {
	const state = store.getState();
	const list = [];

	const addToList = (name, link, exact) => list.push(generatLink(name, link, exact));

	if (state.user) {
		if (state.user.roomId) {
			const roomUser = state.rooms.rooms.find(( room ) => room._id === state.user.roomId);
			const name = roomUser.name ? roomUser.name : `${roomUser.master.name}'s room`;
			addToList(name, `${path.CLIENT_ROOMS}/${state.user.roomId}`, true);
		}
		addToList('Rooms', path.CLIENT_ROOMS, true);
	}
	else {
		addToList('Sign In', '/auth', true);
	}

	return list;
};
