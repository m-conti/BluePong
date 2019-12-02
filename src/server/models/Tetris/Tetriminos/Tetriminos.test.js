import Tetriminos from './Tetriminos';


describe('Tetriminos', () => {
	const tetriminos = new Tetriminos();

	it('rotations', () => {
		expect(tetriminos.rotations).toEqual([
			[
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0]
			],
		]);
	});
	it('serialize', () => {
		expect(tetriminos.serialize()).toEqual({
			piece: [
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0]
			],
			value: 0,
		});
	});
});
