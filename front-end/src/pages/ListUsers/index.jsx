import { DivListUsers } from "./style";
import { CgAddR } from "react-icons/cg";
import { TfiPencilAlt } from "react-icons/tfi";
import { FaListUl } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import AddContactModal from "../../components/AddContactModal";
import DeleteUserModal from "../../components/DeleteUserModal";
import UpdateUserModal from "../../components/UpdateUserModal";
import ListContactModal from "../../components/ContactsModal";
import { useContext } from "react";
import { UserContext } from "../../context";
import { ContactContext } from "../../context/contacts";

const ListUsers = () => {
  const { listUsers, navigate } = useContext(UserContext);
  const { loadContacts } = useContext(ContactContext);
  const [listContactModal, setListContactModal] = useState(false);
  const [addContactModal, setAddContactModal] = useState(false);
  const [deleteUserModal, setDeleteUserModal] = useState(false);
  const [updateUserModal, setUpdateUserModal] = useState(false);

  return (
    <DivListUsers>
      <main className="content">
        <div className="title">
          <h1>users</h1>
          <button className="back-button" onClick={() => navigate("")}>
            X
          </button>
        </div>
        <ul className="list-content">
          <li className="list-info">
            <div className="name info-name">Name:</div>
            <div className="mail info-mail">E-mail:</div>
            <div className="phone info-phone">Phone:</div>
            <div className="contacts info-contacts">Contact:</div>
            <div className="action info-action">Edit/Delete:</div>
          </li>
          {listUsers.map((el, index) => (
            <li className="user" key={index}>
              <div className="name">{el.name}</div>
              <div className="mail">{el.email}</div>
              <div className="phone">{el.phone}</div>
              <div className="contacts contacts-icons">
                <FaListUl
                  className="list-icon"
                  onClick={() => {
                    loadContacts(el.id);
                    setListContactModal(true);
                  }}
                />
                <CgAddR
                  className="add-icon"
                  onClick={() => {
                    setAddContactModal(true);
                  }}
                />
              </div>
              <div className="action action-icons">
                <TfiPencilAlt
                  className="edit-icon"
                  onClick={() => {
                    setUpdateUserModal(true);
                  }}
                />
                <AiFillDelete
                  className="delete-icon"
                  onClick={() => {
                    setDeleteUserModal(true);
                  }}
                />
                {addContactModal && (
                  <AddContactModal
                    setAddContactModal={setAddContactModal}
                    id={el.id}
                  />
                )}
                {deleteUserModal && (
                  <DeleteUserModal
                    setDeleteUserModal={setDeleteUserModal}
                    id={el.id}
                  />
                )}
                {updateUserModal && (
                  <UpdateUserModal
                    setUpdateUserModal={setUpdateUserModal}
                    id={el.id}
                    name={el.name}
                    email={el.email}
                    phone={el.phone}
                  />
                )}
                {listContactModal && (
                  <ListContactModal
                    idUser={el.id}
                    name={el.name}
                    setListContactModal={setListContactModal}
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      </main>
    </DivListUsers>
  );
};
export default ListUsers;
