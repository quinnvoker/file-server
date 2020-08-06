const net = require('net');
const fs = require('fs');
const PORT = 4001;

const server = net.createServer();

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});

server.on('connection', client => {
  console.log('New client connected!');
  client.on('data', data => {
    const path = `./server-files/${data}`;
    console.log(`Message from client: ${data}`);
    if (fs.existsSync(path)) {
      fs.readFile(path, 'utf8', (error, fileData) => {
        if (error) {
          client.write(error);
          return;
        }
        const dataPack = { [data]: fileData };
        client.write(JSON.stringify(dataPack));
      });
    }
    client.write('ok');
  });
});
