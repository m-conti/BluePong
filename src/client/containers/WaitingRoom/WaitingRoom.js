import WaitingRoom from '../../components/WaitingRoom/WaitingRoom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const mapStateToProps = ( state ) => ({
	playerId: state.user._id,
});

const mapDispatchToProps = ( dispatch ) => ({
	toggleReady: () => dispatch(actions.toggleReady()),
	startGame: () => dispatch(actions.startGame()),
	leaveRoom: (id) => dispatch(actions.leaveRoom(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WaitingRoom);
