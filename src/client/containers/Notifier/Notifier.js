import Notifier from '../../components/Notifier/Notifier';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const mapStateToProps = ( state ) => ({
	notifications: state.notifier.notifications,
});

const mapDispatchToProps = ( dispatch ) => ({
	dismissNotification: (id) => dispatch(actions.dismissNotification(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifier);
