import SocketSimulator from '../../tests/simulators/socket';

import sockets from '../Sockets/Sockets';
import Player from '../Player/Player';
import Tetris from './Tetris';


describe('Tetris', () => {
	const socket = new SocketSimulator();
	let player;
	let tetris;

	sockets.simulate();

	beforeEach(() => {
		player = new Player(socket, 1);
		tetris = new Tetris();
		tetris.addRoom({name: 'roomTest'}, player);
	});

	afterEach(() => {
		socket.reset();
		sockets.io.reset();
	});

	// getRoom
	it('getRoom return the room with the current Id', () => {
		expect(tetris.getRoom(1)).toBe(tetris.rooms[0]);
	});
	it('getRoom throw if the room don\'t exist', () => {
		expect(() => tetris.getRoom(2)).toThrow();
	});

	// adRoom
	it('addRoom add room to the rooms list', () => {
		expect(tetris.rooms.length).toBe(1);
	});
	// removeRoom
	it('removeRoom remove room from the rooms list', () => {
		tetris.removeRoom(1);
		expect(tetris.rooms.length).toBe(0);
	});
});
