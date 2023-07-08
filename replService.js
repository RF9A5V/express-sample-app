const fs = require('fs');

const filePath = 'repl.json';

exports.writeReplData = (jsonData) => {
  const data = JSON.stringify(jsonData);
  fs.writeFileSync(filePath, data);
};

exports.readReplData = () => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading repl.json:', error);
    return null;
  }
};
