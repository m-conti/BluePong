import SocketSimulator from '../../../tests/simulators/socket';

import sockets from '../../Sockets/Sockets';
import Player from '../../Player/Player';
import Game from './Game';
import { I, O, L } from '../Tetriminos/Forms/Forms';

import { BOARD, TILE_BLOCK_VALUE } from '../../../../constants/tetris';

describe('Game', () => {
	jest.useFakeTimers();
	const match = {
		tetriminos: null,
		checkEnd: () => { throw 'end'; },
	};
	let emptyBoard;
	const socket1 = new SocketSimulator();
	const socket2 = new SocketSimulator();
	const socket3 = new SocketSimulator();
	let player1;
	let player2;
	let player3;
	let game1;
	let game2;
	let game3;

	sockets.simulate();

	beforeEach(() => {
		match.tetriminos = [new I(), new O(), new L()];
		emptyBoard = BOARD();

		player1 = new Player(socket1, 1);
		player2 = new Player(socket2, 2);
		player3 = new Player(socket3, 3);

		game1 = new Game(player1, match);
		game2 = new Game(player2, match);
		game3 = new Game(player3, match);

		game1.opponents.push(game2);
		game1.opponents.push(game3);
		game2.opponents.push(game1);
		game2.opponents.push(game3);
		game3.opponents.push(game1);
		game3.opponents.push(game2);

		game1.score = 0;
		game2.score = 1000;
		game3.score = 100;
	});
	afterEach(() => {
		clearInterval(game1.gravityLoop);
		clearInterval(game2.gravityLoop);
	});

	it('board is init empty', () => {
		expect(game1.board).toEqual(emptyBoard);
	});
	it('playableBoard add the piece I', () => {
		const board = emptyBoard;
		board[1] = [0, 0, 0, 1, 1, 1, 1, 0, 0, 0];
		expect(game1.playableBoard).toEqual(board);
	});
	it('piecePlaced place the piece on the board', () => {
		game1.moveDown();
		game1.moveDown();
		game1.piecePlaced();
		const board = emptyBoard;
		board[3] = [0, 0, 0, 1, 1, 1, 1, 0, 0, 0];
		expect(game1.board).toEqual(board);
	});
	it('move right move the piece x+1', () => {
		const board = emptyBoard;
		board[1] = [0, 0, 0, 0, 1, 1, 1, 1, 0, 0];
		game1.moveRight();
		expect(game1.playableBoard).toEqual(board);
	});
	it('move left move the piece x-1', () => {
		const board = emptyBoard;
		board[1] = [0, 0, 1, 1, 1, 1, 0, 0, 0, 0];
		game1.moveLeft();
		expect(game1.playableBoard).toEqual(board);
	});
	it('move down move the piece y+1', () => {
		const board = emptyBoard;
		board[2] = [0, 0, 0, 1, 1, 1, 1, 0, 0, 0];
		game1.moveDown();
		expect(game1.playableBoard).toEqual(board);
	});
	it('gravity move down after time', () => {
		const board = emptyBoard;
		board[2] = [0, 0, 0, 1, 1, 1, 1, 0, 0, 0];
		jest.advanceTimersByTime(game1.gravityTimeout);
		expect(game1.playableBoard).toEqual(board);
	});
	it('moveDown can place piece', () => {
		const board = emptyBoard;
		board[19] = [0, 0, 0, 1, 1, 1, 1, 0, 0, 0];
		for (let i = 0; i < 20; ++i)
			game1.moveDown();
		expect(game1.board).toEqual(board);
	});
	it('rotate rotate the piece', () => {
		const board = emptyBoard;
		board[0] = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
		board[1] = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
		board[2] = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
		board[3] = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
		game1.rotate();
		expect(game1.playableBoard).toEqual(board);
	});
	it('rotate can overflow', () => {
		const board = emptyBoard;
		board[1] = [0, 0, 0, 1, 1, 1, 1, 0, 0, 0];
		for (let i = 0; i < game1.tetriminosList[0].rotations.length; ++i)
			game1.rotate();
		expect(game1.playableBoard).toEqual(board);
	});
	it('next piece is O', () => {
		expect(game1.nextPiece).toEqual(new O());
	});
	it('moveLeft or moveRight don\'t put the piece out board', () => {
		const board = emptyBoard;
		for (let i = 0; i < 100; ++i) {
			game1.moveLeft();
		}
		board[1] = [1, 1, 1, 1, 0, 0, 0, 0, 0, 0];
		expect(game1.playableBoard).toEqual(board);
		for (let i = 0; i < 100; ++i) {
			game1.moveRight();
		}
		board[1] = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1];
		expect(game1.playableBoard).toEqual(board);
	});
	it('dropPiece moveDown the piece until she\'s placed', () => {
		const board = emptyBoard;
		board[19] = [0, 0, 0, 1, 1, 1, 1, 0, 0, 0];
		game1.drop();
		expect(game1.board).toEqual(board);
	});
	it('when piece is placed the next piece is selected', () => {
		game1.drop();
		expect(game1.nextPiece).toEqual(new L());
	});
	it('score increase after complete line', () => {
		game1.board[19] = [1, 1, 1, 0, 0, 0, 0, 1, 1, 1];
		game1.powerIndex = 0;
		game1.drop();
		expect(game2.board[19]).toEqual(new Array(10).fill(TILE_BLOCK_VALUE));
	});
	it('perform power: addLaneBest', () => {
		const scoreBefore = game1.score;
		game1.board[19] = [1, 1, 1, 0, 0, 0, 0, 1, 1, 1];
		game1.powerIndex = 0;
		game1.drop();
		expect(game1.score).toEqual(scoreBefore + 100);
	});
	it('perform power: addLaneWorst', () => {
		game1.board[19] = [1, 1, 1, 0, 0, 0, 0, 1, 1, 1];
		game1.powerIndex = 1;
		game1.drop();
		expect(game3.board[19]).toEqual(new Array(10).fill(TILE_BLOCK_VALUE));
	});
	it('perform power: removeLine', () => {
		game1.board[17] = [1, 2, 3, 0, 0, 0, 0, 4, 5, 6];
		game1.board[18] = [1, 1, 1, 0, 0, 0, 0, 1, 1, 1];
		game1.board[19] = new Array(10).fill(TILE_BLOCK_VALUE);
		game1.powerIndex = 2;
		game1.drop();
		expect(game1.board[19]).toEqual([1, 2, 3, 0, 0, 0, 0, 4, 5, 6]);
	});
	it('removeLine: do nothing if the last line isn\'t a handicap line', () => {
		game1.board[18] = [1, 1, 1, 0, 0, 0, 0, 1, 1, 1];
		game1.board[19] = [1, 2, 3, 7, 0, 0, 0, 4, 5, 6];
		game1.powerIndex = 2;
		game1.drop();
		expect(game1.board[19]).toEqual([1, 2, 3, 7, 0, 0, 0, 4, 5, 6]);
	});
	it('power Index can overflow', () => {
		expect(game1.powerIndex).toBe(0);
		game1.nextPower();
		expect(game1.powerIndex).toBe(1);
		game1.nextPower();
		expect(game1.powerIndex).toBe(2);
		game1.nextPower();
		expect(game1.powerIndex).toBe(0);
		game1.nextPower();
		expect(game1.powerIndex).toBe(1);
		game1.previousPower();
		expect(game1.powerIndex).toBe(0);
		game1.previousPower();
		expect(game1.powerIndex).toBe(2);
		game1.previousPower();
		expect(game1.powerIndex).toBe(1);
		game1.previousPower();
		expect(game1.powerIndex).toBe(0);
	});
	it('if tetriminosIndex > tetriminos.length generate a new tetriminos', () => {
		expect(match.tetriminos.length).toBe(3);
		game1.drop();
		game1.drop();
		expect(match.tetriminos.length).toBe(4);
	});
	it('gameover when piece can\'t be placed', () => {
		expect(() => game1.piecePlaced()).toThrow('end');
	});
	it('gameover if the board overflow on handicap', () => {
		game1.board[0] = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
		game2.board[19] = [1, 1, 1, 0, 0, 0, 0, 1, 1, 1];
		game2.powerIndex = 1;
		expect(() => game2.drop()).toThrow('end');
	});
});
