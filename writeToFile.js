const fs = require('fs');

function writeToFile(jsonObject) {
  const filePath = './repl.json';
  const data = JSON.stringify(jsonObject);

  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('JSON object written to file successfully');
    }
  });
}

module.exports = writeToFile;
