import { IContactUpdate } from "./../../interfaces/contact/index";
import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/appError";

const contactUpdateService = async (
  id: string,
  { name, email, phone }: IContactUpdate
) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOneBy({
    id,
  });
  if (!contact) {
    throw new AppError(404, "User not exists!");
  }
  await contactRepository.update(
    { id },
    {
      name: name ? name : contact.name,
      email: email ? email : contact.email,
      phone: phone ? phone : contact.phone,
    }
  );

  const updatedContact = await contactRepository.findOne({
    where: {
      id: id,
    },
  });

  return {
    message: "Updated user",
    user: updatedContact,
  };
};

export default contactUpdateService;
