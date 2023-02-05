import { ModalBoxEdit, ModalContainer } from "./style";

const UpdateUserModal = ({ setUpdateUserModal }) => {
  return (
    <ModalContainer>
      <ModalBoxEdit>
        <div>
          <h2>Update user:</h2>
          <button onClick={() => setUpdateUserModal(false)}>X</button>
        </div>

        <form>
          <label htmlFor="name">Name:</label>
          <input id="name" defaultValue="Axel" type="text" />
          {/* <span>{errors.name?.message}</span> */}

          <label htmlFor="e-mail">E-mail:</label>
          <input id="e-mail" defaultValue="axeellima@gmail.com" type="text" />
          {/* <span>{errors.animal?.message}</span> */}
          <label htmlFor="phone">Phone:</label>
          <input id="e-mail" defaultValue="(44) 99105-3179" type="text" />

          <button type="submit">Update</button>
        </form>
      </ModalBoxEdit>
    </ModalContainer>
  );
};
export default UpdateUserModal;
