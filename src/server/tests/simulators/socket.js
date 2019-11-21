
class SocketSimulator {
	constructor() {
		this.actions = [];
	}

	reset() {
		this.actions = [];
	}

	emit(action, params) {
		if (action !== 'action') { return; }
		this.actions.push(params);
	}
}

export default SocketSimulator;
