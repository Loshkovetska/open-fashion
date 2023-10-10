import { ReactNode } from "react";

const HeadLine2 = ({
  children,
}: {
  children: Array<ReactNode> | ReactNode;
}) => {
  return (
    <h2 className="uppercase text-lg tracking-[4px] text-center">{children}</h2>
  );
};

export default HeadLine2;
