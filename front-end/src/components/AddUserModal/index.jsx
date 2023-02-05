import { ModalBoxEdit, ModalContainer } from "./style";

const AddUserModal = ({ setAddUserModal }) => {
  return (
    <ModalContainer>
      <ModalBoxEdit>
        <div>
          <h2>Create user:</h2>
          <button onClick={() => setAddUserModal(false)}>X</button>
        </div>

        <form>
          <label htmlFor="name">Name:</label>
          <input id="name" placeholder="Enter your name here" type="text" />
          {/* <span>{errors.name?.message}</span> */}

          <label htmlFor="e-mail">E-mail:</label>
          <input id="e-mail" placeholder="Enter your mail here" type="text" />
          {/* <span>{errors.animal?.message}</span> */}
          <label htmlFor="phone">Phone:</label>
          <input id="e-mail" placeholder="Enter your phone here" type="text" />

          <button type="submit">Create</button>
        </form>
      </ModalBoxEdit>
    </ModalContainer>
  );
};
export default AddUserModal;
