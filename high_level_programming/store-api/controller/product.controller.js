const Product = require("../models/product.model");

const asyncWrapper = require("../middlewares/async-wrapper.middleware");

const getProducts = asyncWrapper(async (req, res) => {
  const { featured, company, name, sort, field } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true";
  }

  if (company) {
    queryObject.company = company;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  console.log(queryObject);

  let query = Product.find(queryObject);

  if (sort) {
    const sortList = sort.split(",").join(" ");
    query = query.sort(sortList);
  } else {
    query.sort({ name: 1 });
  }

  if (field) {
    const filedList = field.split(",").join("");
    query = query.select(filedList);
  } else {
    query = query.select({ name: 1, price: 1, currency: 1, rating: 1 });
  }

  // pagination with skip and limit
  const page = Number(req.body.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = Number(page - 1) * limit;

  query = query.skip(skip).limit(limit);

  const products = await query;

  res
    .status(200)
    .json({ success: true, nbHits: products.length, data: products });
});

module.exports = getProducts;
