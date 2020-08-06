const net = require('net');
const readline = require('readline');
const IP = 'localhost';
const PORT = 8080;

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
});

conn.on('data' data => {
  
});