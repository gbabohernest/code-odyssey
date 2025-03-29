import { Router } from "express";
import {
  createCustomer,
  deleteCustomer,
  getCustomer,
  getCustomers,
  updateCustomer,
} from "../controllers/customer-controller.js";

const customerRouter = Router();

customerRouter
  .route("/")
  .get(await getCustomers)
  .post(await createCustomer);

customerRouter
  .route("/:id")
  .get(await getCustomer)
  .put(await updateCustomer)
  .delete(await deleteCustomer);

export default customerRouter;
