import store from '../../store/store';




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
			new Link('Home', '/', true),
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
		list.push('Gomoku', '/gomoku', false);
		list.push('Rooms', '/rooms', false);
		list.push('Profile', '/profile', false);
		list.push('Log Out', '/logout', true);
	}
	else {
		list.push('Sign In', '/auth', true);
	}

	return list.links;
};
