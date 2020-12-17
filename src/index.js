import { server } from './server';
import './database';
server.start({ port: 3001 }, ({ port }) => {
    console.log('server on port', port);
})
