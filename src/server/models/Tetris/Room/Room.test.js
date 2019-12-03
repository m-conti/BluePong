import SocketSimulator from '../../../tests/simulators/socket';

import sockets from '../../Sockets/Sockets';
import Player from '../../Player/Player';
import Room from './Room';


describe('Room', () => {
	const socket = new SocketSimulator();
	const socket2 = new SocketSimulator();
	const socket3 = new SocketSimulator();
	let player;
	let player2;
	let player3;
	let room;

	sockets.simulate();

	beforeEach(() => {
		player = new Player(socket, 1);
		player2 = new Player(socket2, 2);
		player3 = new Player(socket3, 3);
		room = new Room(1, 'roomTest', {playerMax: 2, ViewerMax: 2});
	});

	afterEach(() => {
		socket.reset();
		socket2.reset();
		socket3.reset();
		sockets.io.reset();
	});

	it('serialize without player added don\'t throw', () => {
		room.serialize();
	});
	it('addPlayer add player to players list', () => {
		room.addPlayer(player);
		expect(room.players.length).toBe(1);
		expect(room.players[0]).toBe(player);
	});
	it('addPlayer add player to players list', () => {
		room.addPlayer(player);
		expect(room.players.length).toBe(1);
		expect(room.players[0]).toBe(player);
	});
	it('addPlayer if can\'t throw an error', () => {
		room.addPlayer(player);
		room.addPlayer(player2);
		expect(() => room.addPlayer(player3)).toThrow();
	});
	it('addPlayer on empty room set player as room\'s master', () => {
		room.addPlayer(player);
		expect(room.master).toBe(player);
	});
	it('delete player remove player on players list', () => {
		room.addPlayer(player);
		room.removePlayer(player);
		expect(room.players.length).toBe(0);
	});
	it('delete player reset ready states', () => {
		room.addPlayer(player);
		room.addPlayer(player2);
		room.togglePlayerReady(player);
		room.removePlayer(player2);
		expect(room.readyState[0]).toBe(false);
	});
	it('delete player set newPlayer Master', () => {
		room.addPlayer(player);
		room.addPlayer(player2);
		room.removePlayer(player);
		expect(room.master).toBe(player2);
	});
	it('toggle player set player ready and unready', () => {
		room.addPlayer(player);
		room.togglePlayerReady(player);
		expect(room.readyState[0]).toBe(true);
		room.togglePlayerReady(player);
		expect(room.readyState[0]).toBe(false);
	});
	it('can launch is true if all player are ready', () => {
		room.addPlayer(player);
		room.togglePlayerReady(player);
		expect(room.canLaunch).toBe(true);
	});

	it('play start set a game to the player', () => {
		expect(room.match.games.length).toBe(0);
		room.addPlayer(player);
		room.startMatch();
		expect(room.match.games.length).toBe(1);
	});
	it('restart match on gameover set new match', () => {
		room.addPlayer(player);
		room.startMatch();
		expect(room.isPlaying).toBe(true);
		room.match.games[0].gameOver();
		room.restart();
		expect(room.players.length).toBe(1);
		expect(room.isPlaying).toBe(false);
		expect(room.isDone).toBe(false);
		expect(room.match.games.length).toBe(0);
	});
	it('restart match without gameover throw', () => {
		room.addPlayer(player);
		room.startMatch();
		expect(() => room.restart()).toThrow(new Error('Match isn\'t done'));
	});
	it('restart match without start', () => {
		room.addPlayer(player);
		expect(() => room.restart()).toThrow(new Error('Match hasn\'t started before'));
	});

	it('delete after start don\'t throw', () => {
		player.join(room);
		room.startMatch();
		room.delete();
	});
});
