import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  const onBackHandler = () => {
    navigate(-1);
  };
  return (
    <div style={{ fontSize: "30px" }} onClick={onBackHandler}>
      <MdArrowBackIosNew />
    </div>
  );
};

export default BackButton;
