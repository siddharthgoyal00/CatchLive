import {Server} from "socket.io";
import {Socket} from "socket.io";
import express from 'express'; 
import http from "http";


const app = express();
const server = http.createServer(http);
const io = new Server(server); 
    
io.on('connection', (socket: Socket) => {
      console.log("user is connected")
});

server.listen(3000,()=>{
    console.log("listening on port 3000")
})


    