import { IUserUpdate } from "./../../interfaces/users/index";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const userUpdateService = async (
  id: string,
  { name, email, phone }: IUserUpdate
) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({
    id,
  });
  if (!user) {
    throw new AppError(404, "User not exists!");
  }
  await userRepository.update(
    { id },
    {
      name: name ? name : user.name,
      email: email ? email : user.email,
      phone: phone ? phone : user.phone,
    }
  );

  const newUser = await userRepository.findOne({
    where: {
      id: id,
    },
  });

  return {
    message: "Updated user",
    user: newUser,
  };
};

export default userUpdateService;
