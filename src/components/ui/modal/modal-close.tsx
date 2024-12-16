import { Close } from "@/components/icons";

const ModalClose = ({ action }: { action: any }) => {
  return (
    <span
      onClick={action}
      className="mb-4 cursor-pointer"
    >
      <Close />
    </span>
  );
};

export default ModalClose;
