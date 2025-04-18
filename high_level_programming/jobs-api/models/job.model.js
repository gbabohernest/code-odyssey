import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "company name is required"],
      trim: true,
      maxLength: [50, "company name cannot be more than 50 characters long"],
    },

    position: {
      type: String,
      required: [true, "position name is required"],
      trim: true,
      maxLength: [50, "position cannot be more than 50 characters long"],
    },

    status: {
      type: String,
      default: "pending",
      enum: {
        values: ["interview", "declined", "pending"],
        message: "{VALUES} is not supported",
      },
    },

    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "User credential required to create a job"],
    },
  },
  { timestamps: true },
);

const Job = mongoose.model("Job", jobSchema);
