import { getAvailablePort } from './index'
import * as net from 'net'

function createServer(port: number) {
    const server = net.createServer().listen(port);
}
const PORT = 9527
async function testAvaiablePort() {
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

testAvaiablePort();

