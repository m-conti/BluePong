import store from '../../store/store';
import * as path from '../../../constants/path';


class Link {
	constructor(name, link, exact) {
		this.name = name;
		this.link = link;
		this.exact = exact;
	}
}

class LinksList {
	constructor() {
		this.links = [
		//	new Link('Home', '/', true),
		];
	}
	push(name, link, exact) {
		this.links.push(new Link(name, link, exact));
	}
}


export const generateLinks = () => {
	const state = store.getState();
	const list = new LinksList();

	if (state.user) {
		if (state.user.roomId) {
			const roomUser = state.rooms.rooms.find(( room ) => room._id === state.user.roomId);
			list.push(roomUser.name ? roomUser.name : "Room " + state.user.roomId, `${path.CLIENT_ROOMS}/${state.user.roomId}`, true);
		}
		list.push('Rooms', path.CLIENT_ROOMS, true);
	}
	else {
		list.push('Sign In', '/auth', true);
	}

	return list.links;
};
