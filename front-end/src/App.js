import Global from "./styles/global";
import MainRoutes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Global />
      <MainRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
