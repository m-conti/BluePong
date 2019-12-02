import SocketSimulator from '../../tests/simulators/socket';
import actionSimulator from '../../tests/simulators/actions';

import sockets from '../../models/Sockets/Sockets';
import Player from '../../models/Player/Player';
import Room from '../../models/Tetris/Room/Room';

import * as actionTypes from '../../../actions/actionTypes/user';


describe('dispatchRoom', () => {
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

	it('', () => {

	});
});
