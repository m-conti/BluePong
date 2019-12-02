import SocketSimulator from '../../tests/simulators/socket';
import sockets from './Sockets';
import Player from '../Player/Player';
import generateId from '../../../helpers/utilities/generateId';

describe('Sockets', () => {
	let socket1;
	let socket2;

	beforeEach(() => {
		sockets.players = [];
		socket1 = new SocketSimulator();
		socket2 = new SocketSimulator();
		sockets.addPlayer(socket1);
		sockets.addPlayer(socket2);
	});

	it('simulate', () => {
		sockets.simulate();
		expect(sockets.io).toEqual(new SocketSimulator());
	});
	it('addPlayer', () => {
		expect(sockets.players.length).toBe(2);
		expect(sockets.players[0]).toEqual(new Player(new SocketSimulator(), 1));
		expect(sockets.players[1]).toEqual(new Player(new SocketSimulator(), 2));
	});
	it('getPlayer', () => {
		expect(sockets.getPlayer(socket1)._id).toBe(1);
		expect(sockets.getPlayer(socket2)._id).toBe(2);
	});
	it('getPlayerById', () => {
		expect(sockets.getPlayerById(2)._id).toBe(2);
		expect(sockets.getPlayerById(1)._id).toBe(1);
	});
	it('removePlayer', () => {
		sockets.removePlayer(sockets.getPlayerById(1));
		expect(sockets.players[0]).toEqual(new Player(new SocketSimulator(), 2));
		sockets.removePlayer(sockets.getPlayerById(2));
		expect(sockets.players.length).toBe(0);
	});
});
