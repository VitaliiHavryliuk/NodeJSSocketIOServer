const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 8090;

app.get('/', (req, res) => {
  res.sendFile('C:\\NodeJSSocketIOServer\\index.html');
});

io.on('connection', (socket) => {
  socket.on('Unlock', msg => {
    io.emit('Unlock', { "transactionId":"2026"});
    console.log('Unlock');
  });
  socket.on('GetTransactionDetails', msg => {
    io.emit('GetTransactionDetails', { "transactionId":"2026"});
    console.log('GetTransactionDetails', msg);
  });
  socket.on('TransactionDetails', msg => {
    io.emit('TransactionDetails', msg);
    console.log('TransactionDetails', msg);
  });
  socket.on('Lock', msg => {
    io.emit('Lock', { "transactionId":"2026"});
    console.log('Lock');
  });
  socket.on('MakePayment', msg => {
    io.emit('MakePayment', {"amount":10, "transactionId":"2026"});
    console.log('MakePayment');
  });
  socket.on('subscribe', msg => {
    io.emit('subscribe', msg);
    console.log('subscribe');
  });
});



http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});

