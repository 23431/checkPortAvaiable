import {checkPort, getAvailablePort} from './index'
import * as net from 'net'

function createServer(port: number) {
    const server = net.createServer().listen(port);
}
const PORT = 9527

async function checkPortAvaiable(port: number) {
    try {
       const r =   await checkPort(port);
        console.log(r);
        // listen EADDRINUSE: address already in use :::9527
    }catch (e){
        console.error(e)
    }
}


// createServer(PORT);
// checkPortAvaiable(PORT);
async function getAvaiablePort() {
    try{
        createServer(PORT);
        const result = await getAvailablePort(PORT);
        console.log(result);
    }catch(e){
        console.log(e);

    }finally{
        process.exit(0);
    }
}
getAvaiablePort();

