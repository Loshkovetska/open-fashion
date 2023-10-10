import { ReactNode } from "react";
import Plus from "../../../assets/icons/Plus-1.svg";
import Minus from "../../../assets/icons/Plus.svg";

const Counter = ({
  minusClick,
  plusClick,
  count,
}: {
  minusClick: () => void;
  plusClick: () => void;
  count: number;
}) => {
  return (
    <div className="flex items-center gap-2">
      <CounterButton onClick={minusClick}>
        <Minus />
      </CounterButton>
      <span className="text-sm">{count}</span>
      <CounterButton onClick={plusClick}>
        <Plus />
      </CounterButton>
    </div>
  );
};

export default Counter;

const CounterButton = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      className="w-5 h-5 border border-grayLight rounded-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
