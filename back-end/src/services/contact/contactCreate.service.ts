import { IContact } from "../../interfaces/contact";
import { User } from "../../entities/user.entity";
import { Contact } from "../../entities/contact.entity";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";

const contactCreateService = async (
  id: string,
  { name, email, phone }: IContact
) => {
  const userRepository = AppDataSource.getRepository(User);

  const searchUser = await userRepository.findOne({
    where: {
      id: id,
    },
  });

  const contactRepository = AppDataSource.getRepository(Contact);
  const contacts = await contactRepository.find();

  const emailAlreadyExists = contacts.find(
    (contact) => contact.email === email
  );

  if (emailAlreadyExists) {
    throw new AppError(400, "Email already exists!");
  }
  if (!searchUser) {
    throw new AppError(404, "User not found!");
  }

  const newUser = contactRepository.create({
    name: name,
    email: email,
    phone: phone,
    user: searchUser,
  });
  await contactRepository.save(newUser);

  return newUser;
};
export default contactCreateService;
