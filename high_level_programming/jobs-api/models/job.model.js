import mongoose from "mongoose";
import { BadRequestError } from "../utils/index.js";

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

//unique compound index [these three fields must always be unique]
jobSchema.index({ company: 1, position: 1, createdBy: 1 }, { unique: true });

jobSchema.pre("save", function (next) {
  this.company = this.company.toUpperCase();
  this.position = this.position.toUpperCase();
  next();
});

/**
 * Restrict user from creating duplicate job(s) for the same company.
 * Pre 'save' hook to provide user-friendly error message.
 */
jobSchema.pre("save", async function (next) {
  // check if the doc is new
  if (this.isNew) {
    const existingPosition = await mongoose.models.Job.findOne(
      {
        company: this.company,
        position: this.position,
        createdBy: this.createdBy,
      },
      { company: 1, position: 1, createdBy: 1 },
      null,
    );
    if (existingPosition) {
      return next(
        new BadRequestError(
          "Job with this name and for this company already created by this User",
        ),
      );
    }
  }

  next();
});

const Job = mongoose.model("Job", jobSchema);

export default Job;
