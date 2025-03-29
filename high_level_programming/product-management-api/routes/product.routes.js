import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/product-controller.js";

const productRouter = Router();

productRouter
  .route("/")
  .get(await getProducts)
  .post(await createProduct);

productRouter
  .route("/:id")
  .get(await getProduct)
  .put(await updateProduct)
  .delete(await deleteProduct);

export default productRouter;
