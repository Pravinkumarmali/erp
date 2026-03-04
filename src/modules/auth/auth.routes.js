import express from "express";
import { register, login, refreshTokenHandler } from "./auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/refresh-token", refreshTokenHandler);

export default router;





// import { protect } from "../../middlewares/auth.middleware.js";
// import { authorizeRoles } from "../../middlewares/role.middleware.js";

// router.get(
//   "/admin-only",
//   protect,
//   authorizeRoles("admin"),
//   (req, res) => {
//     res.json({
//       success: true,
//       message: "Welcome Admin 🔥"
//     });
//   }
// );