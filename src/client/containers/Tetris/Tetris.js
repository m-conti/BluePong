import Tetris from '../../components/Tetris/Tetris';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const mapStateToProps = ( state ) => ({
	player: state.user,
	board: state.tetris.board,
	opponents: state.tetris.opponents,
	score: state.tetris.score,
	matchIsOver: state.tetris.matchIsOver,
});

const mapDispatchToProps = ( dispatch ) => ({
	init: () => dispatch(actions.startGame()),
	moveLeft: () => dispatch(actions.moveLeft()),
	moveRight: () => dispatch(actions.moveRight()),
	moveDown: () => dispatch(actions.moveDown()),
	rotate: () => dispatch(actions.rotate()),
	drop: () => dispatch(actions.drop()),
	leave: (id) => dispatch(actions.leaveRoom(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tetris);
