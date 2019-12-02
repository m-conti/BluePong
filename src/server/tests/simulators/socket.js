
class SocketSimulator {
	constructor() {
		this.actions = [];
	}

	reset() {
		this.actions = [];
	}

	emit(action, params) {
		this.actions.push(params);
	}
}

export default SocketSimulator;
