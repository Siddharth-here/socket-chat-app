import http from 'node:http'
import {Server} from 'socket.io'

async function main() {
    const server = http.createServer()
    const io = new Server()

    io.attach(server)

    server.listen(9000, ()=>{
        console.log('Http server is running on PORT 9000');
        
    })
    
}
main()