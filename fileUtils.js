const fs = require('fs');

const filePath = 'repl.json';

// Writes the JSON object to a file
function writeToFile(jsonData) {
  const data = JSON.stringify(jsonData);
  fs.writeFileSync(filePath, data);
}

// Reads the JSON file
function readFile() {
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
}

module.exports = {
  writeToFile,
  readFile,
};
