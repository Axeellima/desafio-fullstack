import { DivStart } from "./style";
import { Toast } from "../../utils/toast";
import { useContext } from "react";
import { UserContext } from "../../context";
const StartPage = () => {
  const { setInApp } = useContext(UserContext);
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
    </DivStart>
  );
};
export default StartPage;
