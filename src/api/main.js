import { location } from '../params';
import * as server from './index';

server.create(location.api).then(() => console.log('not yet ready to play tetris with U ...'));
