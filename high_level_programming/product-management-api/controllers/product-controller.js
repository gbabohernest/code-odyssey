import Product from "../models/product-model.js";

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    if (!products || products.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found!" });
    }
    res
      .status(200)
      .json({
        success: true,
        message: "all product(s) retrieved",
        data: products,
      });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: `Something went wrong: ${error.message}`,
      });
  }
};

export { getProducts };
