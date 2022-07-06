import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "../modules/accounts/UseCases/createUser/CreateUserController";

const userRoutes = Router();
const upload = multer({
  dest: "./tmp/avatar",
});

const createUserController = new CreateUserController();

userRoutes.post("/", createUserController.handle);

export { userRoutes };
