//we are extracting express from node module folder
const express = require("express"); 
//calling express
const app = express();
//http extract again from the node module folder
const http = require("http") 
//its the combination of my http and express 
//pure express app to send the html folder
const server = http.createServer(app); 
//importing my socket.io
const { Server } = require("socket.io");
//this is how you are mannually created io
//io is basically instance of your server
//io for server and socket for my frontend application 
//and this io should be instance that is associated with http and express
const io = new Server(server);

const PORT = 8888;

io.on("connection",(socket)=>{
    socket.on("secret message",(data)=>{
        io.emit("secret message",data)
    })
    console.log(socket.id);
})
//this will render your public folder to localhost:8888
//I will run my frontend application through my backend server
app.use(express.static('public'));
//http and express should listen at my port
server.listen(PORT);