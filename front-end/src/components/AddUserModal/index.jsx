import { ModalBoxEdit, ModalContainer } from "./style";
import { useContext } from "react";
import { UserContext } from "../../context";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addUserSchema } from "../../validators/addUser";

const AddUserModal = () => {
  const { setAddUserModal, createUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addUserSchema),
  });
  return (
    <ModalContainer>
      <ModalBoxEdit>
        <div>
          <h2>Create user:</h2>
          <button onClick={() => setAddUserModal(false)}>X</button>
        </div>

        <form onSubmit={handleSubmit(createUser)}>
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

          <button
            type="submit"
            onClick={() => {
              setTimeout(() => {
                setAddUserModal(false);
              }, 2000);
            }}
          >
            Create
          </button>
        </form>
      </ModalBoxEdit>
    </ModalContainer>
  );
};
export default AddUserModal;
