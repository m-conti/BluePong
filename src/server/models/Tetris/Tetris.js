import {remove} from 'lodash';

import generateId from '../../../helpers/utilities/generateId';
import Room from './Room/Room';
import sockets from '../Sockets/Sockets';
import * as actions from '../../actions/client/rooms';


class Tetris {
	constructor() {
		this.rooms = []
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
		sockets.io.emit('action', actions.updateRoom(room));
		return room;
	}
	removeRoom(id) {
		remove(this.rooms, (room) => room._id === id);
		sockets.io.emit('action', actions.updateRooms(this.rooms));
	}
}

export default Tetris;
