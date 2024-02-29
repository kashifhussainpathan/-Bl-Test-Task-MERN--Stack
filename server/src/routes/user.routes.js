import { Router } from "express";
import {
  getUsers,
  loginUser,
  registerUser,
} from "../controllers/user.controller.js";

const router = Router();

router.route("/").get(getUsers);
router.route("/login").post(loginUser);
router.route("/register").post(registerUser);

export default router;
