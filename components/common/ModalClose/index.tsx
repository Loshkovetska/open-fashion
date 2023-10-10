import { useDispatch } from "react-redux";
import Close from "../../../assets/icons/Close.svg";

const ModalClose = ({ func }: { func: any }) => {
  const dispatch = useDispatch();
  return (
    <span onClick={() => dispatch(func())} className="mb-4 cursor-pointer">
      <Close />
    </span>
  );
};

export default ModalClose;
