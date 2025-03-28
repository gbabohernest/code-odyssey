import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      minLength: [3, "At least 3 characters for product name"],
    },

    price: {
      type: Number,
      required: [true, "Price is required for a product"],
      min: [1, "Must be at least 1"],
    },
    currency: {
      type: String,
      enum: {
        values: ["UGX", "USD"],
        message: "{VALUE} is a Invalid currency.",
      },
      default: "UGX",
    },
    category: {
      type: String,
      required: [true, "category is required for a product."],
      enum: {
        values: ["Electronics", "Fashion", "Sports"],
        message: "{VALUE} is not a valid category.",
      },
    },
  },
  { timestamps: true },
);

const Product = mongoose.model("Product", productSchema);

export default Product;
