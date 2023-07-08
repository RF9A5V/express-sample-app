const replService = require('./replService');

exports.postReplData = (req, res) => {
  const jsonData = req.body;
  replService.writeReplData(jsonData);
  res.json({});
};

exports.getReplData = (req, res) => {
  const jsonData = replService.readReplData();
  res.json(jsonData);
};
