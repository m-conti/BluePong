import SocketSimulator from '../../tests/simulators/socket';
import actionSimulator from '../../tests/simulators/actions';

import sockets from '../../models/Sockets/Sockets';
import Player from '../../models/Player/Player';
import Room from '../../models/Tetris/Room/Room';

import * as actionTypes from '../../../actions/actionTypes/rooms';


describe('dispatchRoom', () => {
	const socket1 = new SocketSimulator();
	const socket2 = new SocketSimulator();
	let player1 = sockets.addPlayer(socket1);
	let player2 = sockets.addPlayer(socket2);

	sockets.simulate();

	beforeEach(() => {
		socket1.reset();
		socket2.reset();
		sockets.io.reset();
	});

	it(actionTypes.SERVER_CREATE_ROOM, () => {
		const action = actionSimulator(actionTypes.SERVER_CREATE_ROOM,{room: {name: 'room test', playerMax: 2, ViewerMax: 2}});
		sockets.simulateAction(player1, action);

		expect(player1.socket.actions.length).toBe(2);
		expect(player2.socket.actions.length).toBe(0);
		expect(sockets.io.actions.length).toBe(1);
	});

	it(actionTypes.SERVER_GET_ROOM, () => {
		const action = actionSimulator(actionTypes.SERVER_GET_ROOM, {id: 1});
		sockets.simulateAction(player1, action);

		expect(player1.socket.actions.length).toBe(1);
		expect(player2.socket.actions.length).toBe(0);
		expect(sockets.io.actions.length).toBe(0);
	});

	it(actionTypes.SERVER_GET_ROOMS, () => {
		const action = actionSimulator(actionTypes.SERVER_GET_ROOMS);
		sockets.simulateAction(player1, action);

		expect(player1.socket.actions.length).toBe(1);
		expect(player2.socket.actions.length).toBe(0);
		expect(sockets.io.actions.length).toBe(0);
	});

	it(actionTypes.SERVER_JOIN_ROOM, () => {
		const action = actionSimulator(actionTypes.SERVER_JOIN_ROOM, {id: 1});
		sockets.simulateAction(player2, action);

		expect(player1.socket.actions.length).toBe(0);
		expect(player2.socket.actions.length).toBe(2);
		expect(sockets.io.actions.length).toBe(1);
	});

	it(actionTypes.SERVER_READY_TOGGLE, () => {
		const action = actionSimulator(actionTypes.SERVER_READY_TOGGLE);
		sockets.simulateAction(player1, action);

		expect(player1.socket.actions.length).toBe(0);
		expect(player2.socket.actions.length).toBe(0);
		expect(sockets.io.actions.length).toBe(1);
	});

	it(actionTypes.SERVER_LEAVE_ROOM, () => {
		const action = actionSimulator(actionTypes.SERVER_LEAVE_ROOM, {id: 2});
		sockets.simulateAction(player2, action);

		expect(player1.socket.actions.length).toBe(0);
		expect(player2.socket.actions.length).toBe(2);
		expect(sockets.io.actions.length).toBe(1);
	});

	it(actionTypes.SERVER_DELETE_ROOM, () => {
		const action = actionSimulator(actionTypes.SERVER_DELETE_ROOM, {id: 1});
		sockets.simulateAction(player1, action);

		expect(player1.socket.actions.length).toBe(2);
		expect(player2.socket.actions.length).toBe(0);
		expect(sockets.io.actions.length).toBe(2);
	});
});
