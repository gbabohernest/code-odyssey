import { Schema } from 'mongoose';

const taskSchema = new Schema(
  {
    name: {
      type: String,
      require: [true, 'task name is required'],
    },

    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
