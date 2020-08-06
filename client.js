const net = require('net');
const readline = require('readline');
const IP = 'localhost';
const PORT = 4001;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const conn = net.createConnection({
  host: IP,
  port: PORT,
});

conn.setEncoding('utf8');

conn.on('connect', () => {
  console.log("Connected to server!");
  rl.question('Which file would you like? ', answer => {
    conn.write(answer);
  });
});

conn.on('data', data => {
  console.log(data);
});