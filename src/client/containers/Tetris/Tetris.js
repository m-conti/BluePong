import Tetris from '../../components/Tetris/Tetris';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const mapStateToProps = ( state ) => ({
	board: state.tetris.board,
	opponents: state.tetris.opponents,
	score: state.tetris.score,
});

const mapDispatchToProps = ( dispatch ) => ({
	init: () => dispatch(actions.startGame()),
	moveLeft: () => dispatch(actions.moveLeft()),
	moveRight: () => dispatch(actions.moveRight()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tetris);
