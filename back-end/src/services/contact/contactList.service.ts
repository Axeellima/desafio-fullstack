import { User } from "../../entities/user.entity";
import { Contact } from "../../entities/contact.entity";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";

const contactListService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: id,
  });
  if (!user) {
    throw new AppError(404, "User not found!");
  }

  return user.contacts;
};
export default contactListService;
