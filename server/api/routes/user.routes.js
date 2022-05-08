import { Express } from "express";
import { Router } from "express";

import { createUser, authenticate, logout } from "../controllers/user.controller";
import { isAuth } from "../../middlewares/auth.middleware";

router.post("/register", createUser);
router.post ("/authenticate". authenticate);

router.post("/logut", [isAuth],logout);

export {router as userRoutes};