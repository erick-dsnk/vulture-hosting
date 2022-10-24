import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "name not provided"],
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "email not provided"],
    validate: {
      validator: (v: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
    },
  },
  password: {
    type: String,
    required: [true, "password not provided"],
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
