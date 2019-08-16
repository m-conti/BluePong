import Rooms from '../../components/Rooms/Rooms';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const mapStateToProps = ( state ) => ({
	rooms: state.rooms.rooms,
});

const mapDispatchToProps = ( dispatch ) => ({
	getRooms: () => dispatch(actions.getRooms()),
	createRoom: (room) => dispatch(actions.createRoom(room)),
	deleteRoom: (id) => dispatch(actions.deleteRoom(id)),
	joinRoom: (id) => dispatch(actions.joinRoom(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
