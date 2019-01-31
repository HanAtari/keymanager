const SocketIO = require('socket.io');
const access = require('../server/controllers/accessCode.controller')
module.exports = server => {
    const io = new SocketIO(server);

    io.on('connection', (socket) => {
        socket.on('update', (message, callback) => {
            console.log('update success');
        });

        socket.on('find', async (message, callback) => {
            if (await access.findUser(message.inviteId)) {
                io.emit('access', { inviteId: message.inviteId });
                console.log('update success');
            }
        });

        socket.on('success', (message, callback) => {
            io.emit('success', { Hello: 'World'})
            console.log('update success');
        });
        console.log('a user connected');
    });

    return io;
}
