import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { Response } from "express";
import { AppError } from "../../errors/appError";

const contactDeleteService = async (id: string, res: Response) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const user = await contactRepository.findOne({
    where: {
      id: id,
    },
  });

  if (!user) {
    throw new AppError(404, "User not found");
  }
  contactRepository.delete(user);
  return;
};
export default contactDeleteService;
