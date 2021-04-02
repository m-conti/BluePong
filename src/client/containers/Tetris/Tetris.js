import Tetris from '../../components/Tetris/Tetris';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const mapStateToProps = ( state ) => ({
	player: state.user,
	board: state.tetris.board,
	nextPiece: state.tetris.nextPiece,
	opponents: state.tetris.opponents,
	score: state.tetris.score,
	power: state.tetris.power,
	pause: state.tetris.pause,
	matchIsOver: state.tetris.matchIsOver,
	winner: state.tetris.winner,
});

const mapDispatchToProps = ( dispatch ) => ({
	init: () => dispatch(actions.startGame()),
	moveLeft: () => dispatch(actions.moveLeft()),
	moveRight: () => dispatch(actions.moveRight()),
	moveDown: () => dispatch(actions.moveDown()),
	rotate: () => dispatch(actions.rotate()),
	drop: () => dispatch(actions.drop()),
	pauseGame: () => dispatch(actions.pauseGame()),
	leave: (id) => dispatch(actions.leaveRoom(id)),
	powerNext: () => dispatch(actions.nextPower()),
	powerPrevious: () => dispatch(actions.previousPower()),
	restart: () => dispatch(actions.restartGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tetris);
