import React from 'react';

import { TILE_EMPTY_VALUE } from '../../../../constants/tetris';

import Tile from '../Board/Tile/Tile';

import classes from './NextPiece.css';
import classesBoard from '../Board/Board.css';
import { some } from 'lodash';


const nextPiece = ( props ) => {

	const tileArray = props.piece.map((content, rowNumber) => {
		if (!(some(content, x => x !== 0))) {
			return null
		}
		const rowContent = content.map((x, column) => (
			<Tile content={x ? props.value : TILE_EMPTY_VALUE} key={column} />
		));

		return (
			<div className={classesBoard.Row} key={rowNumber}>
				{rowContent}
			</div>
		)
	});
	return (
		<div className={classes.NextPiece}>
			<div className={classes.Array}>
				{tileArray}
			</div>
		</div>
	);
};

export default nextPiece;
