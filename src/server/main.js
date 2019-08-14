import { location }  from '../params';
import Server from './Server';

new Server(location.server, location.client).listen(() => console.log('Hello World!'));
