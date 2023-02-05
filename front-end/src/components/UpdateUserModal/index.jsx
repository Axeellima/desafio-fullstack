import { ModalBoxEdit, ModalContainer } from "./style";
import { useContext } from "react";
import { UserContext } from "../../context";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addUserSchema } from "../../validators/addUser";

const UpdateUserModal = ({ setUpdateUserModal, name, email, phone, id }) => {
  const { loadUsers, updateUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addUserSchema),
  });

  const onSubmit = (data) => {
    updateUser(id, data);
    setTimeout(() => {
      loadUsers();
      setUpdateUserModal(false);
    }, 2000);
  };
  return (
    <ModalContainer>
      <ModalBoxEdit>
        <div>
          <h2>Update user:</h2>
          <button onClick={() => setUpdateUserModal(false)}>X</button>
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
export default UpdateUserModal;
