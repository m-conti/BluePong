import { remove } from 'lodash';

import generateId from '../../../helpers/utilities/generateId';
import Room from './Room/Room';


class Tetris {
	constructor() {
		this.rooms = [];
	}

	addRoom( roomOpt, player ) {
		const room = new Room(generateId(this.rooms), roomOpt.name, roomOpt);
		this.rooms.push(room);
		room.addPlayer(player);
	}

	deleteRoom( id ) {
		const room = this.rooms.find(( room ) => room.od === id);
		if ( room ) {
			room.closeRoom();
			remove(this.rooms, ( room ) => room === room);
		}
	}
}

export default Tetris;
