import { Route, Routes } from "react-router-dom";
import ListUsers from "../pages/ListUsers";
import Dashboard from "../pages/Dashboard/Dashboard";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Dashboard />} />
      <Route path="/users" element={<ListUsers />} />
    </Routes>
  );
};
export default MainRoutes;
