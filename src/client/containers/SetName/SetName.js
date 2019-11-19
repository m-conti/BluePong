import SetName from '../../components/SetName/SetName';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const mapStateToProps = ( state ) => ({
	name: state.user.name,
});

const mapDispatchToProps = ( dispatch ) => ({
	setName: (name) => dispatch(actions.setName(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SetName);
