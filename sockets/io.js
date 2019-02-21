const SocketIO = require('socket.io');
const access = require('../server/controllers/accessCode.controller')
module.exports = server => {
    const io = new SocketIO(server);

    io.on('connection', (socket) => {
        socket.on('update', (message, callback) => {
            // io.sockets.emit('update', { inviteId: 'dfdf' });
            // io.sockets.emit('update', { inviteId: 'dfdf' });
            console.log('update success', message);
            console.log('update success', message);
        });

        socket.on('find', async (message, callback) => {
            console.log('get access', message);
            if (await access.findUser(message.inviteId)) {
                io.sockets.emit('access', message);
            }
        });

        socket.on('success', (message, callback) => {
            io.sockets.emit('update', message)
            console.log('success', message);
        });
        console.log('a user connected');
    });

    return io;
}
