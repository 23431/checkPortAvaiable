import * as net from 'net'
import { IResult } from './type';

function checkPort(port: number): Promise<IResult> {
    return new Promise((resolve, reject) => {
        const server = net.createServer().listen(port);
        server.on('listening', () => {
            server.close();
            resolve({ port: port, status: true, msg: null });
        });
        server.on('error', (err) => {
            reject({ port: port, status: false, msg: err });
        })
    })
}

/***
 * 
 * port base port
 * 
 */

async function getAvailablePort(port: number) {
    let _port = port;
    try {
        return await checkPort(_port);
    } catch (e) {
        _port = _port + 1;
        return await getAvailablePort(_port);
    }
}

export { getAvailablePort, checkPort }
