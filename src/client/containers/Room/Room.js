import Room from '../../components/Room/Room';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const mapStateToProps = ( state ) => ({
	rooms: state.rooms.rooms, 
});

const mapDispatchToProps = ( dispatch ) => ({
	getRoom: (id) => dispatch(actions.getRoom(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Room);
