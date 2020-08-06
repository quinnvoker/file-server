const net = require('net');
const PORT = 4001;

const server = net.createServer();

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});

server.on('connection', client => {
  console.log('New client connected!');
  client.write('Hello there!');
  client.on('data', data => {
    console.log(`Message from client: ${data}`);
  });
});