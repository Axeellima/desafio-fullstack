import { DivStart } from "./style";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toast } from "../../utils/toast";
const StartPage = ({ setInApp }) => {
  return (
    <DivStart>
      <button
        onClick={() => {
          Toast.enterApp();
          setTimeout(() => {
            setInApp(true);
          }, 3000);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Enter
      </button>
      <ToastContainer />
    </DivStart>
  );
};
export default StartPage;
