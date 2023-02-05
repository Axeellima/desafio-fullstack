import { DivListUsers } from "./style";
import { CgAddR } from "react-icons/cg";
import { TfiPencilAlt } from "react-icons/tfi";
import { FaListUl } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import AddContactModal from "../../components/AddContactModal";
import DeleteUserModal from "../../components/DeleteUserModal";
import UpdateUserModal from "../../components/UpdateUserModal";

const ListUsers = () => {
  const [addContactModal, setAddContactModal] = useState(false);
  const [deleteUserModal, setDeleteUserModal] = useState(false);
  const [updateUserModal, setUpdateUserModal] = useState(false);
  return (
    <DivListUsers>
      <main className="content">
        <div className="title">
          <h1>users</h1>
        </div>
        <ul className="list-content">
          <li className="list-info">
            <div className="name info-name">Name:</div>
            <div className="mail info-mail">E-mail:</div>
            <div className="phone info-phone">Phone:</div>
            <div className="contacts info-contacts">Contact:</div>
            <div className="action info-action">Edit/Delete:</div>
          </li>
          <li className="user">
            <div className="name">Axel Lima</div>
            <div className="mail">axeellima@gmail.com</div>
            <div className="phone">(44) 99105-3179</div>
            <div className="contacts contacts-icons">
              <FaListUl className="list-icon" />
              <CgAddR className="add-icon" />
            </div>
            <div className="action action-icons">
              <TfiPencilAlt className="edit-icon" />
              <AiFillDelete className="delete-icon" />
            </div>
          </li>
          <li className="user">
            <div className="name">Axel Lima</div>
            <div className="mail">axeellima@gmail.com</div>
            <div className="phone">(44) 99105-3179</div>
            <div className="contacts contacts-icons">
              <FaListUl className="list-icon" />
              <CgAddR className="add-icon" />
            </div>
            <div className="action action-icons">
              <TfiPencilAlt className="edit-icon" />
              <AiFillDelete className="delete-icon" />
            </div>
          </li>
          <li className="user">
            <div className="name">Axel Lima</div>
            <div className="mail">axeellima@gmail.com</div>
            <div className="phone">(44) 99105-3179</div>
            <div className="contacts contacts-icons">
              <FaListUl className="list-icon" />
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
            </div>
          </li>
        </ul>
      </main>
      {addContactModal && (
        <AddContactModal setAddContactModal={setAddContactModal} />
      )}
      {deleteUserModal && (
        <DeleteUserModal setDeleteUserModal={setDeleteUserModal} />
      )}
      {updateUserModal && (
        <UpdateUserModal setUpdateUserModal={setUpdateUserModal} />
      )}
    </DivListUsers>
  );
};
export default ListUsers;
