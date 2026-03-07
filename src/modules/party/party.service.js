import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "./auth.model.js";
import { JWT_SECRET } from "../../config/env.js";

const generateAccessToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    JWT_SECRET,
    { expiresIn: "15m" }
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user._id },
    JWT_SECRET,
    { expiresIn: "7d" }
  );
};

export const registerUser = async (data) => {
  const { name, email, password, role } = data;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role
  });

  return user;
};

export const loginUser = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) throw new Error("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) throw new Error("Invalid credentials");

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  user.refreshToken = refreshToken;
  await user.save();

  return {
    user,
    accessToken,
    refreshToken
  };
};

// export const loginUser = async (email, password) => {
//   const user = await User.findOne({ email });
//   if (!user) {
//     throw new Error("Invalid credentials");
//   }

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) {
//     throw new Error("Invalid credentials");
//   }

//   const token = jwt.sign(
//     { id: user._id, role: user.role },
//     JWT_SECRET,
//     { expiresIn: "7d" }
//   );

//   return { user, token };
// };

