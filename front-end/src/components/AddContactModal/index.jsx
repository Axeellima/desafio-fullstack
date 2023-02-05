import { ModalBoxEdit, ModalContainer } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addUserSchema } from "../../validators/addUser";
import { useContext } from "react";
import { ContactContext } from "../../context/contacts";

const AddContactModal = ({ setAddContactModal, id }) => {
  const { loadContacts, createContact } = useContext(ContactContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addUserSchema),
  });

  const onSubmit = (data) => {
    createContact(id, data);
    setTimeout(async () => {
      setAddContactModal(false);
      loadContacts(id);
    }, 2000);
  };

  return (
    <ModalContainer>
      <ModalBoxEdit>
        <div>
          <h2>Create contact:</h2>
          <button onClick={() => setAddContactModal(false)}>X</button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            placeholder="Enter your name here"
            type="text"
            {...register("name")}
          />
          <span>{errors.name?.message}</span>

          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            placeholder="Enter your mail here"
            type="text"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>

          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            placeholder="Enter your phone here"
            type="text"
            {...register("phone")}
          />
          <span>{errors.phone?.message}</span>

          <button type="submit">Create</button>
        </form>
      </ModalBoxEdit>
    </ModalContainer>
  );
};
export default AddContactModal;
