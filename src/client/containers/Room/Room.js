import Room from '../../components/Room/Room';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const mapStateToProps = ( state ) => ({
});

const mapDispatchToProps = ( dispatch ) => ({
	getRoom: () => dispatch(actions.getRoom()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Room);
