import Room from '../../components/Room/Room';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const mapStateToProps = ( state ) => ({
	rooms: state.rooms.rooms,
	playerId: state.user._id,
	playerRoomId: state.user.roomId,
});

const mapDispatchToProps = ( dispatch ) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Room);
