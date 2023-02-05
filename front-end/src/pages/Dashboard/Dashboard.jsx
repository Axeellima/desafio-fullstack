import { DashboardStyle } from "./style";
import StartPage from "../StartPage";
import AddUserModal from "../../components/AddUserModal";
import { useContext } from "react";
import { UserContext } from "../../context";

const Dashboard = () => {
  const { inApp, addUserModal, setAddUserModal, navigate, loadUsers } =
    useContext(UserContext);

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
            onClick={async () => {
              await loadUsers();
              navigate("/users");
            }}
          >
            List Users
          </button>
        </DashboardStyle>
      ) : (
        <>
          <StartPage />
        </>
      )}
      {addUserModal && <AddUserModal />}
    </>
  );
};
export default Dashboard;
