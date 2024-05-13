var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as net from 'net';
function checkPort(port) {
    return new Promise((resolve, reject) => {
        const server = net.createServer().listen(port);
        server.on('listening', () => {
            server.close();
            resolve({ port: port, status: true, msg: null });
        });
        server.on('error', (err) => {
            reject({ port: port, status: false, msg: err });
        });
    });
}
/***
 *
 * port base port
 *
 */
function getAvailablePort(port) {
    return __awaiter(this, void 0, void 0, function* () {
        let _port = port;
        try {
            return yield checkPort(_port);
        }
        catch (e) {
            _port = _port + 1;
            return yield getAvailablePort(_port);
        }
    });
}
export { getAvailablePort, checkPort };
