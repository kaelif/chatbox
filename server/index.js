const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('new connection!');

    socket.on('disconnect', () => {
        console.log('user has left');
    })
})

app.use(cors());
app.use(router);

server.listen(PORT, () => console.log('Server has started on port 5000'));