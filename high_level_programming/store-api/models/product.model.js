const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'product name is required'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'product price is required'],
    },

    currency: {
      type: String,
      default: 'UGX',
      enum: {
        values: ['UGX', 'USD', 'LRD'],
        message: '{VALUES} is not a valid currency',
      },
    },

    featured: {
      type: Boolean,
      default: false,
    },

    rating: {
      type: Number,
      default: 4.5,
    },

    company: {
      type: String,
      enum: {
        values: ['ikea', 'liddy', 'caressa', 'marcos'],
        message: '{VALUES} is not supported',
      },
    },
  },
  { timestamps: true }
);

const Product = mongoose.Model('Product', productSchema);

module.exports = Product;
