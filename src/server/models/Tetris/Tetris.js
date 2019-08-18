import {remove} from 'lodash';

import generateId from '../../../helpers/utilities/generateId';
import Room from './Room/Room';
import sockets from '../Sockets/Sockets';
import * as actions from '../../actions/client/rooms';


class Tetris {
	constructor() {
		this.rooms = new Proxy([], {
			set: (target, property, value, receiver) => {
				const old = target[property];
				target[property] = value;
				if (typeof(value) === 'object') {
					sockets.io.emit('action', actions.updateRooms(target));
				}
				return true;
			},
		});
	}

	getRoom(id) {
		const room = this.rooms.find((room) => room._id === id);
		if (!room) throw new Error(`No room found with the given id : ${id}`);
		return room;
	}

	addRoom(roomOpt, player) {
		const room = new Room(generateId(this.rooms), roomOpt.name, roomOpt);
		player.join(room);
		this.rooms.push(room);
		return room;
	}
}

export default Tetris;
