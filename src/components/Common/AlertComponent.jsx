import { MODAL_TIME } from "shared/data";
import Swal from "sweetalert2";

const AlertComponent = ({ icon, title, text }) => {
  return Swal.fire({
    icon: icon,
    title: title,
    text: text,
    showConfirmButton: false,
    timer: MODAL_TIME,
  });
};

export default AlertComponent;
