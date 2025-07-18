import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "task's name is required"],
      unique: true,
      trim: true,
      maxLength: [20, "task's name cannot be more than 20 characters"],
    },

    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
