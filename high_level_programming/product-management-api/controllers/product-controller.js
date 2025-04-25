import Product from "../models/product-model.js";
import { asyncMiddleware } from "../middlewares/async-wrapper.middleware.js";
import { customError } from "../errors/api-error.js";

const getProducts = async (req, res) => {
  const products = await Product.find({});
  if (!products || products.length === 0) {
    return res
      .status(200)
      .json({
        success: true,
        message: "No product(s) found, Start Adding product(s)",
      });
  }
  res.status(200).json({
    success: true,
    message: "all product(s) retrieved",
    data: products,
  });
};

const createProduct = async (req, res) => {
  const payload = req.body;
  const product = await Product.create({ ...payload });
  res
    .status(201)
    .json({ success: true, message: "product created", data: product });
};

const getProduct = async (req, res) => {
  const { id: productID } = req.params;
  const product = await Product.findById(productID);
  if (!product) {
    throw customError("Product Not Found!", 404);
  }

  res.status(200).json({ success: true, data: product });
};

const updateProduct = async (req, res) => {
  const { id: productID } = req.params;
  const product = await Product.findByIdAndUpdate(productID, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    throw customError("Product Not Found!", 404);
  }

  res
    .status(200)
    .json({ success: true, message: "update success", data: product });
};

const deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    throw customError("Product Not Found!", 404);
  }

  // res.status(204);
  res.status(200).json({ success: true, message: "product deleted" });
};

export { getProducts, createProduct, getProduct, updateProduct, deleteProduct };
