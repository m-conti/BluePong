import React from 'react';
import * as propTypes from 'prop-types';

import classes from './Spectre.css';


const spectre = ( props ) => (
	<div className={classes.Spectre}>
		{props.board.map((row, ck) => row.map((v, rk) => <div key={`${ck}.${rk}`}>{v}</div>))}
	</div>
);

spectre.propTypes = {
	board: propTypes.arrayOf(propTypes.arrayOf(propTypes.number.isRequired).isRequired).isRequired,
};

export default spectre;
