import Room from '../../components/Room/Room';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const mapStateToProps = ( state ) => ({
	rooms: state.rooms.rooms,
	playerId: state.user._id,
});

const mapDispatchToProps = ( dispatch ) => ({
	toggleReady: () => dispatch(actions.toggleReady()),
	startGame: () => dispatch(actions.startGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Room);
