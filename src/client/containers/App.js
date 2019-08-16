import { connect } from 'react-redux'

import App from '../components/App';

import * as actions from '../store/actions/index';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
	ping: () => dispatch(actions.ping()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


