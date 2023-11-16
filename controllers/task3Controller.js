const { categories, products } = require('../data');
const controller = {};

controller.show = (req, res) => {
  const items = req.query.category
    ? products.filter((product) => product.category == req.query.category)
    : products;
  return res.render('task3', { categories, items });
};

module.exports = controller;
