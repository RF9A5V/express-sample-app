const fileUtils = require('./fileUtils');

// Handles the POST request to write the JSON object to a file and respond with an empty object
function postReplData(req, res) {
  const jsonData = req.body;

  try {
    fileUtils.writeToFile(jsonData);
    res.status(200).json({});
  } catch (error) {
    res.status(500).json({ error: 'Failed to write data to file' });
  }
}

// Handles the GET request to retrieve the JSON file
function getReplData(req, res) {
  try {
    const jsonData = fileUtils.readFile();
    res.status(200).json(jsonData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read data from file' });
  }
}

module.exports = {
  postReplData,
  getReplData,
};
