import SocketSimulator from '../../tests/simulators/socket';

import sockets from '../Sockets/Sockets';
import Player from './Player';
import Room from '../Tetris/Room/Room';


describe('Player', () => {
	const socket = new SocketSimulator();
	let player;
	let room;
	let room2;

	sockets.simulate();

	beforeEach(() => {
		player = new Player(socket, 1);
		room = new Room(1, 'roomTest', {playerMax: 2, ViewerMax: 2});
		room2 = new Room(1, 'roomTest2', {playerMax: 2, ViewerMax: 2});
	});

	afterEach(() => {
		socket.reset();
		sockets.io.reset();
	});

	it('Player constructor', () => {
		expect(player).toMatchObject({_id: 1, name:null, room:null, isAdmin: false});
	});

	it('Player Set Name', () => {
		const nameTest = 'nameTest';
		player.setName(nameTest);
		expect(player.name).toBe(nameTest);
	});

	// Serialize
	it('Serialize don\'t show socket and room', () => {
		expect(player.serialize()).toEqual(expect.not.objectContaining({room: null, socket: socket}));
	});
	it('Serialize show _id / name / isAdmin', () => {
		expect(player.serialize()).toEqual({_id: 1, name: null, isAdmin: false});
	});
	// SerializeMe
	it('SerializeMe serialize and add roomId', () => {
		player.room = room;
		const result = {
			...player.serialize(),
			roomId: room._id,
		};
		expect(player.serializeMe()).toEqual(result);
	});

	// getGame
	it('getGame return null if player hasn\'t game', () => {
		expect(player.getGame()).toBe(null);
	});
	it('getGame return game if his game is not in play', () => {
		player.join(room);
		room.startMatch();
		expect(player.getGame()).toEqual(room.match.games[0]);
	});

	// joinRoom
	it('join Room', () => {
		player.join(room);
		expect(player.room).toBe(room);
		expect(room.players[0]).toBe(player);
	});
	it('join Room but already in room throw error', () => {
		player.join(room);
		expect(() => player.join(room2)).toThrow();
	});
	// leaveRoom
	it('leave Room', () => {
		player.join(room);
		player.leave(room);
		expect(player.room).toBe(null);
		expect(room.players[0]).toBe(undefined);
	});
	it('leave Wrong Room throw error', () => {
		player.join(room);
		expect(() => player.leave(room2)).toThrow();
	});
});
