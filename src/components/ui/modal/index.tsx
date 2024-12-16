import classNames from "classnames";

const Modal = (
  props: {
    isOpen: boolean;
  } & React.PropsWithChildren
) => {
  return (
    <div
      className={classNames(
        "flex flex-col w-screen h-screen fixed top-0 left-0 bg-white pt-2 px-4 pb-8 overflow-auto transition-all z-[100] duration-500",
        !props.isOpen
          ? "-translate-y-full opacity-0"
          : "translate-y-0 opacity-100"
      )}
    >
      {props.children}
    </div>
  );
};

export default Modal;
