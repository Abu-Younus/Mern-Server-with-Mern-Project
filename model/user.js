import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  userName: String,
  email: String,
  mobile: Number,
  password: String,
});

const user = mongoose.model("user", userSchema);

export default user;
