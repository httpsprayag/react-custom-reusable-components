const User = require("../models/User.model");
const bcrypt = require("bcrypt");

exports.registerUser = async (userData) => {
  console.log({ userData });
  const { name, email, password } = userData;

  if (!name || !email || !password) {
    throw new Error("Name, Email and Password fiels is required !");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new Error("User already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

  const user = new User({
    name,
    email,
    password: hashedPassword,
  });

  await user.save();

  return user;
};

exports.loginUser = async (userData) => {
  const { email, password } = userData;

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    throw new Error("Incorrect password");
  }

  return user;
};
