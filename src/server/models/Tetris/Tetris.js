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

		if ( !room || (player !== room.master && !player.isAdmin) ) return;

		room.closeRoom();
		remove(this.rooms, ( r ) => r === room);
		console.log(this.rooms.map((r)=>r._id));
		return room;
	}

	joinRoom( id, player ) {
		const room = this.getRoom(id);

		if ( !room ) return;

		room.addPlayer(player);
		return room;
	}
}

export default Tetris;
