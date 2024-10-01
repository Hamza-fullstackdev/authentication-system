import errorHandler from "../middleware/error.middleware.js";
import User from "../models/user.model.js";
import isValidEmail from "../utils/checkemail.utils.js";
import containsOnlyNumbers from "../utils/checkphone.utils.js";
import hashedPassword from "../utils/hashedpasswords.utils.js";
import { config } from "../utils/config.utils.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async (req, res, next) => {
  const { fname, lname, email, password, phone, country } = req.body;
  if (!fname || !lname || !email || !password || !phone || !country)
    return next(
      errorHandler(
        403,
        "All fields are required, Please fill out the form first!"
      )
    );
  if (fname.length < 3 || lname.length < 3)
    return next(errorHandler(403, "Please check first and last name"));
  if (password.length < 8)
    return next(errorHandler(403, "Password should be at least 8 characters"));
  if (!isValidEmail(email))
    return next(errorHandler(403, "Please enter a valid email address"));
  if (!containsOnlyNumbers(phone))
    return next(errorHandler(400, "Please enter valid phone number"));
  const checkNumber = await User.findOne({ phone });
  if (checkNumber)
    return next(errorHandler(403, "Phone number already exists"));
  const checkEmail = await User.findOne({ email });
  if (checkEmail)
    return next(errorHandler(403, "User with this email already exists"));
  let encryptedPassword;
  try {
    encryptedPassword = await hashedPassword(password, 10);
  } catch (error) {
    next(error);
  }
  const newUser = new User({
    fname,
    lname,
    email,
    password: encryptedPassword,
    phone,
    country,
    role: "user",
  });
  try {
    await newUser.save();
    res
      .status(201)
      .json({ status: 201, message: "User registered successfully" });
  } catch (error) {
    next(error);
  }
};

export const googleAuth = async (req, res, next) => {
  try {
    const isUserExist = await User.findOne({ email: req.body.email });
    const checkAccessToken = await User.findOne({
      access_token: req.body.access_token,
    });
    if (isUserExist || checkAccessToken) {
      const token = jwt.sign({ id: isUserExist._id }, config.JWT_TOKEN);
      const { password: pass, ...rest } = isUserExist._doc;
      res.cookie(config.AUTH_COOKIE, token).status(200).json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const newUser = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        country: req.body.country,
        phone: req.body.phone,
        email: req.body.email,
        password: generatedPassword,
        access_token: req.body.access_token,
        role: "user",
      });
      try {
        await newUser.save();
        const token = jwt.sign({ id: newUser._id }, config.JWT_TOKEN);
        const { password: pass, ...rest } = newUser._doc;
        res.cookie(config.AUTH_COOKIE, token).status(200).json(rest);
      } catch (error) {
        next(error);
      }
    }
  } catch (error) {
    next(error);
  }
};

export const githubAuth = async (req, res, next) => {
  try {
    const checkAccessToken = await User.findOne({
      access_token: req.body.access_token,
    });
    if (checkAccessToken) {
      const token = jwt.sign({ id: isUserExist._id }, config.JWT_TOKEN);
      const { password: pass, ...rest } = isUserExist._doc;
      res.cookie(config.AUTH_COOKIE, token).status(200).json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const newUser = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        country: req.body.country,
        phone: req.body.phone,
        email: req.body.email,
        password: generatedPassword,
        access_token: req.body.access_token,
        role: "user",
      });
      try {
        await newUser.save();
        const token = jwt.sign({ id: newUser._id }, config.JWT_TOKEN);
        const { password: pass, ...rest } = newUser._doc;
        res.cookie(config.AUTH_COOKIE, token).status(200).json(rest);
      } catch (error) {
        next(error);
      }
    }
  } catch (error) {
    next(error);
  }
};

export const microsoftAuth = async (req, res, next) => {
  try {
    const isUserExist = await User.findOne({ email: req.body.email });
    const checkAccessToken = await User.findOne({
      access_token: req.body.access_token,
    });
    if (isUserExist || checkAccessToken) {
      const token = jwt.sign({ id: isUserExist._id }, config.JWT_TOKEN);
      const { password: pass, ...rest } = isUserExist._doc;
      res.cookie(config.AUTH_COOKIE, token).status(200).json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const newUser = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        country: req.body.country,
        phone: req.body.phone,
        email: req.body.email,
        password: generatedPassword,
        access_token: req.body.access_token,
        role: "user",
      });
      try {
        await newUser.save();
        const token = jwt.sign({ id: newUser._id }, config.JWT_TOKEN);
        const { password: pass, ...rest } = newUser._doc;
        res.cookie(config.AUTH_COOKIE, token).status(200).json(rest);
      } catch (error) {
        next(error);
      }
    }
  } catch (error) {
    next(error);
  }
};

export const facebookAuth = async (req, res, next) => {
  try {
    const isUserExist = await User.findOne({ email: req.body.email });
    const checkAccessToken = await User.findOne({
      access_token: req.body.access_token,
    });
    if (isUserExist || checkAccessToken) {
      const token = jwt.sign({ id: isUserExist._id }, config.JWT_TOKEN);
      const { password: pass, ...rest } = isUserExist._doc;
      res.cookie(config.AUTH_COOKIE, token).status(200).json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const newUser = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        country: req.body.country,
        phone: req.body.phone,
        email: req.body.email,
        password: generatedPassword,
        access_token: req.body.access_token,
        role: "user",
      });
      try {
        await newUser.save();
        const token = jwt.sign({ id: newUser._id }, config.JWT_TOKEN);
        const { password: pass, ...rest } = newUser._doc;
        res.cookie(config.AUTH_COOKIE, token).status(200).json(rest);
      } catch (error) {
        next(error);
      }
    }
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email) return next(errorHandler(403, "Email field is required"));
  if (!password) return next(errorHandler(403, "Password field is required"));
  try {
    const user = await User.findOne({ email });
    if (!user)
      return next(
        errorHandler(403, "Invalid credentials, try with different email")
      );
    const decryptPassword = bcrypt.compareSync(password, user.password);
    if (!decryptPassword) return next(errorHandler(403, "Wrong Credentials"));
    if (user) {
      const token = jwt.sign({ id: user._id }, config.JWT_TOKEN);
      const { password: pass, ...rest } = user._doc;
      res.cookie(config.AUTH_COOKIE, token).status(200).json(rest);
    }
  } catch (error) {
    next(error);
  }
};
