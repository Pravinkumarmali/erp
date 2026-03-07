import { registerUser, loginUser } from "./auth.service.js";
import { registerSchema, loginSchema } from "./auth.validation.js";

export const register = async (req, res, next) => {
  try {
    const { error } = registerSchema.validate(req.body);
    if (error) throw new Error(error.details[0].message);

    const user = await registerUser(req.body);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user
    });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { error } = loginSchema.validate(req.body);
    if (error) throw new Error(error.details[0].message);

    const { email, password } = req.body;
    const data = await loginUser(email, password);

    res.json({
      success: true,
      message: "Login successful",
      data
    });
  } catch (err) {
    next(err);
  }
};

export const refreshTokenHandler = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken)
      return res.status(401).json({ message: "Refresh token required" });

    const decoded = jwt.verify(refreshToken, JWT_SECRET);

    const user = await User.findById(decoded.id);

    if (!user || user.refreshToken !== refreshToken) {
      return res.status(403).json({ message: "Invalid refresh token" });
    }

    const newAccessToken = jwt.sign(
      { id: user._id, role: user.role },
      JWT_SECRET,
      { expiresIn: "15m" }
    );

    res.json({
      success: true,
      accessToken: newAccessToken
    });
  } catch (err) {
    next(err);
  }
};