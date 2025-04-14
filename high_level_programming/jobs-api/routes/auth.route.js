import { Router } from "express";
import { login, signup } from "../controllers/auth.controller.js";

const authRouter = new Router();

authRouter.route("/signup").post(signup);

authRouter.route("/login").post(login);

export default authRouter;
