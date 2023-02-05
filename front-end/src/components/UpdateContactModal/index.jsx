import { ModalBoxEdit, ModalContainer } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addUserSchema } from "../../validators/addUser";
import { useContext } from "react";
import { ContactContext } from "../../context/contacts";

const UpdateContactModal = ({
  setUpdateContactModal,
  id,
  name,
  email,
  phone,
  idUser,
}) => {
  const { loadContacts, updateContact } = useContext(ContactContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addUserSchema),
  });

  const onSubmit = (data) => {
    updateContact(id, data);
    setTimeout(() => {
      loadContacts(idUser);
      setUpdateContactModal(false);
    }, 2000);
  };

  return (
    <ModalContainer>
      <ModalBoxEdit>
        <div>
          <h2>Update contact:</h2>
          <button onClick={() => setUpdateContactModal(false)}>X</button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            defaultValue={name}
            type="text"
            {...register("name")}
          />
          <span>{errors.name?.message}</span>

          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            defaultValue={email}
            type="text"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>
          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            defaultValue={phone}
            type="text"
            {...register("phone")}
          />
          <span>{errors.phone?.message}</span>

          <button type="submit">Update</button>
        </form>
      </ModalBoxEdit>
    </ModalContainer>
  );
};
export default UpdateContactModal;
