import Swal from "sweetalert2";
import { MODAL_TIME } from "shared/data";

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
