import { ObjectID } from "typeorm";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { Response } from "express";
import { AppError } from "../../errors/appError";
var ObjectId = require("mongodb").ObjectId;

const userDeleteService = async (id: string, res: Response) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({
    where: {
      id: id,
    },
  });

  if (!user) {
    throw new AppError(404, "User not found");
  }
  userRepository.delete(user);
  return;
};
export default userDeleteService;
