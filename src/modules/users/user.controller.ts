import { Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.createUser(req.body);

    res.send({
      success: true,
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const insertORUpdateUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.insertORUpdateUser(req.body);

    res.send({
      success: true,
      message: "User updated successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const UserController = {
  createUser,
  insertORUpdateUser,
};
