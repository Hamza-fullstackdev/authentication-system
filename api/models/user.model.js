import mongoose from "mongoose";

const userScheama = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    unique: true,
  },
  country: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 255,
  },
  avatar:{
    type: String,
    default: 'https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp'
  },
  access_token:{
    type: String,
  },
  role: {
    type: String,
    default: "user",
  },
});

const User = mongoose.model("User", userScheama);

export default User;