import classNames from "classnames";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import TopTitle from "../TopTitle";

const TabContainer = ({
  children,
  topTitle,
  tabNumber,
}: {
  children: Array<ReactNode> | ReactNode;
  topTitle: string;
  tabNumber: number;
}) => {
  const { currentTab } = useSelector((state: any) => state.order);

  return (
    <div
      className={classNames(
        "transition-all px-4 flex-grow  absolute w-full h-full top-0 left-0 duration-1000 pt-[90px] pb-[100px]",
        currentTab == tabNumber
          ? "translate-x-0 opacity-1"
          : "translate-x-full opacity-0"
      )}
    >
      <TopTitle title={topTitle} />
      {children}
    </div>
  );
};

export default TabContainer;
