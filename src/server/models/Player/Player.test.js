import SocketSimulator from '../../tests/simulators/socket';
import Player from './Player';

describe('Player', () => {
	const socket = new SocketSimulator();
	let player;

	beforeEach(() => {
		socket.reset();
		player = new Player(socket, 1);
	});

	it('Player constructor', () => {
		expect(player).toMatchObject({_id: 1, name:null, room:null, isAdmin: false});
	});

	it('Player Set Name', () => {
		const nameTest = 'NameTest';
		player.setName(nameTest)
		expect(player).toMatchObject({_id: 1, name:nameTest, room:null, isAdmin: false});
	});

	// Serialize
	it('Serialize don\'t show socket and room', () => {
		expect(player.serialize()).toMatchObject(expect.not.objectContaining({room: null, socket: socket}));
	});
	it('Serialize show _id / name / isAdmin', () => {
		expect(player.serialize()).toEqual({_id: 1, name: null, isAdmin: false});
	});

});
