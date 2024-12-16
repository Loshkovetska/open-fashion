import { useAppSelector } from "@/lib/hooks";
import classNames from "classnames";
import TopTitle from "../TopTitle";

type TabContainerPropType = {
  topTitle: string;
  tabNumber: number;
} & React.PropsWithChildren;

export default function TabContainer({
  children,
  topTitle,
  tabNumber,
}: TabContainerPropType) {
  const { currentTab } = useAppSelector((state) => state.order);

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
}
