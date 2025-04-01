import Customer from "../models/customer-model.js";
import { asyncMiddleware } from "../middlewares/async-wrapper.middleware.js";
import { customError } from "../errors/api-error.js";

const getCustomers = asyncMiddleware(async (req, res) => {
  const customers = await Customer.find({});
  if (!customers || customers.length === 0) {
    throw customError("No customer found!", 404);
  }
  res.status(200).json({
    success: true,
    message: "all customer(s) retrieved",
    data: customers,
  });
});

const createCustomer = asyncMiddleware(async (req, res, next) => {
  const customer = await Customer.create(req.body);
  res
    .status(201)
    .json({ success: true, message: "customer created", data: customer });
});

const getCustomer = asyncMiddleware(async (req, res) => {
  const { id: customerID } = req.params;
  const customer = await Customer.findById(customerID);

  if (!customer) {
    throw customError("Customer NOT Found!", 404);
  }

  res
    .status(200)
    .json({ success: true, message: "customer retrieved", data: customer });
});

const updateCustomer = asyncMiddleware(async (req, res) => {
  const { id: customerID } = req.params;
  const customer = await Customer.findByIdAndUpdate(customerID, req.body, {
    new: true,
    runValidators: true,
  });
  if (!customer) {
    throw customError("Customer NOT Found!", 404);
  }

  res
    .status(200)
    .json({ success: true, message: "update success", data: customer });
});

const deleteCustomer = asyncMiddleware(async (req, res) => {
  const customer = await Customer.findByIdAndDelete(req.params.id);
  if (!customer) {
    throw customError("Customer NOT Found!", 404);
  }

  res.status(204);
});

export {
  getCustomers,
  createCustomer,
  getCustomer,
  updateCustomer,
  deleteCustomer,
};
