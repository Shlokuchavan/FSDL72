const fs = require('fs');

function readFileCallback(err, data) {
  if (err) return console.error('Error reading file:', err);
  console.log('File contents:', data);
}

fs.readFile('example.txt', 'utf-8', readFileCallback);


