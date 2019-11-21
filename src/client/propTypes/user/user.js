import * as propTypes from 'prop-types';

export default propTypes.shape({
	_id: propTypes.number,
	isAdmin: propTypes.bool.isRequired,
	name: propTypes.string,
	roomId: propTypes.number,
});
