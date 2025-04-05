const Product = require("../models/product.model");

const asyncWrapper = require("../middlewares/async-wrapper.middleware");

const getProducts = asyncWrapper(async (req, res) => {
  const { featured } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true";
  }

  console.log(queryObject);
  let query = Product.find(queryObject);

  const products = await query;

  res
    .status(200)
    .json({ success: true, nbHits: products.length, data: products });
});

module.exports = getProducts;
