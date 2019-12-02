import SocketSimulator from '../../../tests/simulators/socket';

import sockets from '../../Sockets/Sockets';
import Player from '../../Player/Player';
import Room from '../Room/Room';

describe('Match', () => {
	const socket = new SocketSimulator();
	const socket2 = new SocketSimulator();
	let player;
	let player2;
	let room;
	let match;

	sockets.simulate();

	beforeEach(() => {
		player = new Player(socket, 1);
		player2 = new Player(socket2, 2);
		room = new Room(1, 'roomTest', {playerMax: 2, ViewerMax: 2});
		player.join(room);
		player2.join(room);
		match = room.match;
		match.init([player, player2]);
	});

	afterEach(() => {
		socket.reset();
		socket2.reset();
		sockets.io.reset();
	});

	it('init create games for eachPlayer', () => {
		expect(match.games.length).toBe(2);
	});
	it('init set opponents for eachPlayer', () => {
		expect(match.games[0].opponents[0]).toBe(match.games[1]);
		expect(match.games[0].opponents.length).toBe(1);
		expect(match.games[1].opponents[0]).toBe(match.games[0]);
		expect(match.games[0].opponents.length).toBe(1);
	});
	it('checkEnd do nothing if no games are over', () => {
		match.checkEnd();
		expect(room.isDone).toBe(false);
	});
	it('checkEnd do nothing if 1 / 2 games are over', () => {
		match.games[0].over = true;
		match.checkEnd();
		expect(room.isDone).toBe(false);
	});
	it('checkEnd set room.isDone if all games are over', () => {
		match.games[0].over = true;
		match.games[1].over = true;
		match.checkEnd();
		expect(room.isDone).toBe(true);
	});
});
