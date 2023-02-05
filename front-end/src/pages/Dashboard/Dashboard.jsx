import { useState } from "react";
import { DashboardStyle } from "./style";
import StartPage from "../StartPage";
import AddUserModal from "../../components/AddUserModal";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [inApp, setInApp] = useState(false);
  const [addUserModal, setAddUserModal] = useState(false);

  const navigate = useNavigate();
  return (
    <>
      {inApp ? (
        <DashboardStyle>
          <button
            onClick={() => {
              setAddUserModal(true);
            }}
          >
            Create User
          </button>
          <button
            onClick={() => {
              navigate("/users");
            }}
          >
            List Users
          </button>
        </DashboardStyle>
      ) : (
        <>
          <StartPage setInApp={setInApp} />
        </>
      )}
      {addUserModal && <AddUserModal setAddUserModal={setAddUserModal} />}
    </>
  );
};
export default Dashboard;
