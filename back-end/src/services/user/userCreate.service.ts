import { IUser } from "../../interfaces/users/index";
import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";

const userCreateService = async ({ name, email, phone }: IUser) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new AppError(400, "Email already exists!");
  }

  const newUser = userRepository.create({
    name: name,
    email: email,
    phone: phone,
  });
  await userRepository.save(newUser);

  return newUser;
};
export default userCreateService;
