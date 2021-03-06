const express=require('express')
const http=require('http')
const app=express();
const server=http.createServer(app);
const socket=require('socket.io')
const io=socket(server);
const users={}

io.on('connection',socket=>{
    socket.emit('new-user',socket.id);
    socket.on('send-message',body=>{
        io.emit("message",body)
    })
})
//making a connection with ID connection
server.listen(8000,()=>console.log("Server is running on port 8000"));