import Customer from "../models/customer-model.js";

const getCustomers = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Something went wrong: ${error.message}`,
    });
  }
};

const createCustomer = async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res
      .status(201)
      .json({ success: true, message: "customer created", data: customer });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: `something went wrong: ${error}` });
  }
};

export { getCustomers, createCustomer };
