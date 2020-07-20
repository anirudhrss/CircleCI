var fs = require('fs');

fs.writeFile('mynewfile1.txt', 'Hello contentt', function (err) {
  if (err) throw err;
  console.log('Saved!');
});