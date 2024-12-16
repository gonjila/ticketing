import express from "express";

import curentUserRoutes from "./current-user";
import signinRoutes from "./signin";
import signoutRoutes from "./signout";
import signupRoutes from "./signup";

const router = express.Router();

router.use("/users", [curentUserRoutes, signinRoutes, signoutRoutes, signupRoutes]);

export default router;
