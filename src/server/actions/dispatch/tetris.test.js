import SocketSimulator from '../../tests/simulators/socket';
import actionSimulator from '../../tests/simulators/actions';

import sockets from '../../models/Sockets/Sockets';
import Player from '../../models/Player/Player';
import Room from '../../models/Tetris/Room/Room';

import * as actionTypes from '../../../actions/actionTypes/tetris';
import * as actionRooms from '../../../actions/actionTypes/rooms';


describe('dispatchTetris', () => {
	const socket1 = new SocketSimulator();
	const socket2 = new SocketSimulator();
	const player1 = sockets.addPlayer(socket1);
	const player2 = sockets.addPlayer(socket2);

	sockets.simulate();

	sockets.simulateAction(player1, actionSimulator(
		actionRooms.SERVER_CREATE_ROOM,
		{room: {name: 'room test', playerMax: 2, ViewerMax: 2}}
	));
	sockets.simulateAction(player2, actionSimulator(actionRooms.SERVER_JOIN_ROOM, {id: 1}));
	sockets.simulateAction(player1, actionSimulator(actionRooms.SERVER_READY_TOGGLE));

	beforeEach(() => {
		socket1.reset();
		socket2.reset();
		sockets.io.reset();
	});

	it(actionTypes.SERVER_START_GAME, () => {
		expect(() => sockets.simulateAction(player1, actionSimulator(actionTypes.SERVER_START_GAME))).toThrow(new Error('Every players aren\'t ready'));

		sockets.simulateAction(player2, actionSimulator(actionRooms.SERVER_READY_TOGGLE));
		sockets.io.reset();
		sockets.simulateAction(player1, actionSimulator(actionTypes.SERVER_START_GAME));

		expect(player1.socket.actions.length).toBe(5);
		expect(player2.socket.actions.length).toBe(5);
		expect(sockets.io.actions.length).toBe(1);
	});

	it(actionTypes.SERVER_MOVE_PIECE_DOWN, () => {
		sockets.simulateAction(player1, actionSimulator(actionTypes.SERVER_MOVE_PIECE_DOWN));

		expect(player1.socket.actions.length).toBe(1);
		expect(player2.socket.actions.length).toBe(0);
		expect(sockets.io.actions.length).toBe(0);
	});
	it(actionTypes.SERVER_MOVE_PIECE_LEFT, () => {
		sockets.simulateAction(player1, actionSimulator(actionTypes.SERVER_MOVE_PIECE_LEFT));

		expect(player1.socket.actions.length).toBe(1);
		expect(player2.socket.actions.length).toBe(0);
		expect(sockets.io.actions.length).toBe(0);
	});
	it(actionTypes.SERVER_MOVE_PIECE_RIGHT, () => {
		sockets.simulateAction(player1, actionSimulator(actionTypes.SERVER_MOVE_PIECE_RIGHT));

		expect(player1.socket.actions.length).toBe(1);
		expect(player2.socket.actions.length).toBe(0);
		expect(sockets.io.actions.length).toBe(0);
	});
	it(actionTypes.SERVER_ROTATE_PIECE, () => {
		sockets.simulateAction(player1, actionSimulator(actionTypes.SERVER_ROTATE_PIECE));

		expect(player1.socket.actions.length).toBe(1);
		expect(player2.socket.actions.length).toBe(0);
		expect(sockets.io.actions.length).toBe(0);
	});
	it(actionTypes.SERVER_NEXT_POWER, () => {
		sockets.simulateAction(player1, actionSimulator(actionTypes.SERVER_NEXT_POWER));

		expect(player1.socket.actions.length).toBe(1);
		expect(player2.socket.actions.length).toBe(0);
		expect(sockets.io.actions.length).toBe(0);
	});
	it(actionTypes.SERVER_PREVIOUS_POWER, () => {
		sockets.simulateAction(player1, actionSimulator(actionTypes.SERVER_PREVIOUS_POWER));

		expect(player1.socket.actions.length).toBe(1);
		expect(player2.socket.actions.length).toBe(0);
		expect(sockets.io.actions.length).toBe(0);
	});
	it(actionTypes.SERVER_DROP_PIECE, () => {
		sockets.simulateAction(player1, actionSimulator(actionTypes.SERVER_DROP_PIECE));

		expect(player1.socket.actions.length).toBe(3);
		expect(player2.socket.actions.length).toBe(1);
		expect(sockets.io.actions.length).toBe(0);
	});
	it(actionTypes.SERVER_RESTART_GAME, () => {
		// simulate endgame
		const game1 = player1.getGame();
		const game2 = player2.getGame();
		game1.gameOver();
		game2.gameOver();
		socket1.reset();
		socket2.reset();
		sockets.io.reset();

		sockets.simulateAction(player1, actionSimulator(actionTypes.SERVER_RESTART_GAME));

		expect(player1.socket.actions.length).toBe(1);
		expect(player2.socket.actions.length).toBe(1);
		expect(sockets.io.actions.length).toBe(1);
	});
});
