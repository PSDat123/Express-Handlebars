const { zodiacs } = require('../data');
const controller = {};

controller.show = (req, res) => {
  return res.render('task4', { zodiacs });
};

controller.showDetail = (req, res) => {
  const name = req.params.name;
  const zodiac = zodiacs.filter((z) => z.name == name)[0];
  return res.render('task4-details', { zodiac });
};

module.exports = controller;
