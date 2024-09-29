import errorHandler from "../middleware/error.middleware.js";
import User from "../models/user.model.js";
import isValidEmail from "../utils/checkemail.utils.js";
import containsOnlyNumbers from "../utils/checkphone.utils.js";
import hashedPassword from "../utils/hashedpasswords.utils.js";

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
