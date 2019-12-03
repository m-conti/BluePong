import Room from '../../components/Room/Room';
import { connect } from 'react-redux';

const mapStateToProps = ( state ) => ({
	rooms: state.rooms.rooms,
	playerId: state.user._id,
	playerRoomId: state.user.roomId,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Room);
