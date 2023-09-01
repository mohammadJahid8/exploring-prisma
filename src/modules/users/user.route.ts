import express from "express";
import { UserController } from "./user.controller";
const router = express.Router();

// router.get("/", UserController.createUser);
router.post("/create-user", UserController.createUser);
router.patch("/update-user", UserController.insertORUpdateUser);

export const UserRoutes = router;
