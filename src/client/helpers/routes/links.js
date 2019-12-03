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

	// FAIRE AUTH
	if (state.user) {
		if (state.user.roomId) {
			list.push('Tetris', `${path.CLIENT_ROOMS}/${state.user.roomId}`, true);
		}
		list.push('Rooms', path.CLIENT_ROOMS, true);
		// list.push('Profile', '/profile', false);
		// list.push('Log Out', '/logout', true);
	}
	else {
		list.push('Sign In', '/auth', true);
	}

	return list.links;
};
