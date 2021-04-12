import { location } from '../params';
import * as server from './index';

server.create(location.api).then(() => console.log('API listening on ' + location.api.url));
