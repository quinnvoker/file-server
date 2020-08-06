const net = require('net');
const readline = require('readline');
const fs = require('fs');
const IP = 'localhost';
const PORT = 4001;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const conn = net.createConnection({
  host: IP,
  port: PORT,
});

conn.setEncoding('utf8');

conn.on('connect', () => {
  console.log("Connected to server!");
  rl.question('Which file would you like? ', answer => {
    conn.write(answer);
    rl.close();
  });
});

conn.on('data', data => {
  const dataObj = JSON.parse(data);
  const fileName = Object.keys(dataObj)[0];
  const path = `./client-files/${fileName}`;
  fs.writeFile(path, dataObj[fileName], 'utf8', () => {
    console.log(`Downloaded ${fileName} to ${path}. Ending connection...`);
    conn.end();
  });
});