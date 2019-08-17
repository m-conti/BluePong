import Room from '../../components/Room/Room';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const mapStateToProps = ( state ) => ({
});

const mapDispatchToProps = ( dispatch ) => ({
	getRoom: (id) => dispatch(actions.getRoom(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Room);
