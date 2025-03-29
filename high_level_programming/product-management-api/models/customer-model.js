import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "customer name is required"],
      trim: true,
      minLength: [3, "name must be at least three characters"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      trim: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email address",
      ],
    },

    address: {
      type: String,
      required: [true, "customer address is required"],
      trim: true,
      minLength: [3, "Address should be at least 3 characters"],
    },

    phone: {
      type: Number,
      required: [true, "phone number is required"],
      minLength: [10, "phone number should be 10 digit least."],
    },
    code: {
      type: Number,
      default: 256,
    },
  },
  { timestamps: true },
);

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
