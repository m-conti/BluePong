
import React, { useEffect } from 'react';

import classes from './Board.css';

import Tile from './Tile/Tile';

const Board = ( props ) => {

	useEffect(() => {
	}, []);


	const tileArray = props.board.map((content, rowNumber) => {
		const rowContent = content.map((x, column) => (
			<Tile content={x} key={rowNumber + "." + column} />
		));
		return (
			<div className={classes.BoardRow} key={rowNumber}>
				{rowContent}
			</div>
		)
	});


	return (
		<div className={classes.Board}>
			{tileArray}
		</div>
	);
};

export default Board;
