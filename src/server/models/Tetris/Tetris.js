import { remove } from 'lodash';

import generateId from '../../../helpers/utilities/generateId';
import Room from './Room/Room';


class Tetris {
	constructor() {
		this.rooms = [];
	}

	getRoom( id ) {
		return this.rooms.find(( room ) => room._id === id);
	}

	addRoom( roomOpt, player ) {
		const room = new Room(generateId(this.rooms), roomOpt.name, roomOpt);
		this.rooms.push(room);
		room.addPlayer(player);
		return room;
	}

	deleteRoom( id, player ) {
		const room = this.getRoom(id);
		if ( player !== room.master && !player.isAdmin ) {
			return;
		}
		if ( room ) {
			room.closeRoom();
			remove(this.rooms, ( room ) => room === room);
		}
	}

	joinRoom( id, player ) {
		const room = this.getRoom(id);
		if ( room ) {
			room.addPlayer(player);
		}
		return room;
	}
}

export default Tetris;
