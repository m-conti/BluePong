import SocketSimulator from '../../tests/simulators/socket';
import actionSimulator from '../../tests/simulators/actions';

import sockets from '../../models/Sockets/Sockets';
import Player from '../../models/Player/Player';

import * as actionTypes from '../../../actions/actionTypes/socket';


describe('dispatchDefault', () => {
	const socket = new SocketSimulator();
	let player;

	sockets.simulate();

	beforeEach(() => {
		player = new Player(socket, 1);
	});

	afterEach(() => {
		socket.reset();
		sockets.io.reset();
	});

	it('ping', () => {
		const action = actionSimulator(actionTypes.PING);
		sockets.simulateAction(player, action);
		expect(player.socket.actions.length).toBe(1);
		expect(sockets.io.actions.length).toBe(0);
	});
	it('pong', () => {
		const action = actionSimulator(actionTypes.PONG);
		expect(() => sockets.simulateAction(player, action)).toThrow(new Error('Pong call on server side'));
	});
});
