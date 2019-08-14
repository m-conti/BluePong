import params  from '../params'
import * as server from './index'
server.create(params.api).then( () => console.log('not yet ready to play tetris with U ...') )
