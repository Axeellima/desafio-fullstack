import { toast } from "react-toastify";

export class Toast {
  static enterApp() {
    toast("🚀 Starting application", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    return;
  }
}
