const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 8090;

app.get('/', (req, res) => {
  res.sendFile('C:\\Projects\\ServerSocketIO\\chat-example\\index.html');
});

io.on('connection', (socket) => {
  socket.on('lock', msg => {
    io.emit('lock', msg);
    console.log('lock');
  });
  socket.on('unlock', msg => {
    io.emit('unlock', msg);
    console.log('unlock');
  });
  socket.on('LockTable', msg => {
    io.emit('LockTable', {"employeeNum":"1231", "transactionId":"12312"});
    console.log('LockTable');
  });
});



http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});

