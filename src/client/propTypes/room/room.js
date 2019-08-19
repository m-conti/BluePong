import * as propTypes from 'prop-types';

import playerType from '../player/player';

export default propTypes.shape({
	_id: propTypes.number.isRequired,
	players: propTypes.arrayOf(playerType).isRequired
}).isRequired
