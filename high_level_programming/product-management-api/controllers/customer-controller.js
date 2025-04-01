import Customer from "../models/customer-model.js";
import { asyncMiddleware } from "../middlewares/async-wrapper.middleware.js";

const getCustomers = asyncMiddleware(async (req, res) => {
  const customers = await Customer.find({});
  if (!customers || customers.length === 0) {
    return res
      .status(404)
      .json({ success: false, message: "No customer found" });
  }
  res.status(200).json({
    success: true,
    message: "all customer(s) retrieved",
    data: customers,
  });
});

const createCustomer = asyncMiddleware(async (req, res) => {
  const customer = await Customer.create(req.body);
  res
    .status(201)
    .json({ success: true, message: "customer created", data: customer });
});

const getCustomer = asyncMiddleware(async (req, res) => {
  const { id: customerID } = req.params;
  const customer = await Customer.findById(customerID);

  if (!customer) {
    return res
      .status(404)
      .json({ success: false, message: "Customer NOT Found" });
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
    return res
      .status(404)
      .json({ success: false, message: "customer NOT Found" });
  }

  res
    .status(200)
    .json({ success: true, message: "update success", data: customer });
});

const deleteCustomer = asyncMiddleware(async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer) {
      return res
        .status(404)
        .json({ success: false, message: "customer NOT Found" });
    }

    res.status(204);
  } catch (error) {
    res.status(400).json({ success: false, message: `Bad Request : ${error}` });
  }
});

export {
  getCustomers,
  createCustomer,
  getCustomer,
  updateCustomer,
  deleteCustomer,
};
