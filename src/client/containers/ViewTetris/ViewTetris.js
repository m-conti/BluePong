import ViewTetris from '../../components/ViewTetris/ViewTetris';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const mapStateToProps = () => ({

});

const mapDispatchToProps = ( dispatch ) => ({
	refreshGame: (id) => dispatch(actions.refreshGame(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewTetris);
