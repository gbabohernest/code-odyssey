import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_EXPIRES_IN, JWT_SECRET } from "../config/env.js";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "user name is required"],
      minLength: [3, "user name cannot be less then three(3) characters"],
      maxLength: [50, "username cannot be more than fifty (50) characters"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "email is required"],
      lowercase: [true, "email address is lowercase"],
      trim: true,
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/,
        "Invalid email address, provide a valid email, Please.",
      ],
    },

    password: {
      type: String,
      required: [true, "password is required"],
      minLength: [6, "password cannot be less than six (6) characters"],
      maxLength: [1024, "password is too long"],
    },
  },
  { timestamps: true },
);

// before we create a user document, hash the user password
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//instance method to generate user's token
userSchema.methods.createJWT = function () {
  return jwt.sign({ userID: this._id, name: this.name }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
};
const User = mongoose.model("User", userSchema);

export default User;
