import Customer from "../models/customer-model.js";
// import { asyncMiddleware } from "../middlewares/async-wrapper.middleware.js";
import { customError } from "../errors/api-error.js";

const getCustomers = async (req, res) => {
  const customers = await Customer.find({});
  if (!customers || customers.length === 0) {
    return res
      .status(200)
      .json({
        success: true,
        message: "No customer(s) found, Add customer(s)",
      });
  }
  res.status(200).json({
    success: true,
    message: "all customer(s) retrieved",
    data: customers,
  });
};

const createCustomer = async (req, res) => {
  const customer = await Customer.create(req.body);
  res
    .status(201)
    .json({ success: true, message: "customer created", data: customer });
};

const getCustomer = async (req, res) => {
  const { id: customerID } = req.params;
  const customer = await Customer.findById(customerID);

  if (!customer) {
    throw customError("Customer NOT Found!", 404);
  }

  res
    .status(200)
    .json({ success: true, message: "customer retrieved", data: customer });
};

const updateCustomer = async (req, res) => {
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
};

const deleteCustomer = async (req, res) => {
  const customer = await Customer.findByIdAndDelete(req.params.id);
  if (!customer) {
    throw customError("Customer NOT Found!", 404);
  }

  // res.status(204);
  res.status(200).json({ success: true, message: "customer deleted" });
};

export {
  getCustomers,
  createCustomer,
  getCustomer,
  updateCustomer,
  deleteCustomer,
};
