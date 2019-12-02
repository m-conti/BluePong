import SocketSimulator from '../../tests/simulators/socket';
import actionSimulator from '../../tests/simulators/actions';

import sockets from '../../models/Sockets/Sockets';

import * as actionTypes from '../../../actions/actionTypes/user';


describe('dispatchUser', () => {
	const socket = new SocketSimulator();
	let player;

	sockets.simulate();

	beforeEach(() => {
		player = sockets.addPlayer(socket);
	});

	afterEach(() => {
		sockets.removePlayer(player);
		socket.reset();
		sockets.io.reset();
	});

	it(actionTypes.SERVER_SET_NAME, () => {
		const action = actionSimulator(actionTypes.SERVER_SET_NAME, {name:'nameTest'});
		sockets.simulateAction(player, action);

		expect(player.socket.actions.length).toBe(1);
		expect(sockets.io.actions.length).toBe(0);
	});
});
