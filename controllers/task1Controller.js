const { emotions } = require('../data');
const controller = {};

controller.show = (req, res) => {
  res.render('task1', { emotions });
};

module.exports = controller