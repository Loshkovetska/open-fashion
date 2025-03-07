import CounterButton from "@/components/common/counter/counter-button";
import { Minus, Plus } from "@/components/icons";
import classNames from "classnames";

type CounterPropType = {
  count: number;
  title?: string;
  className?: string;
  onClick: (num: number) => void;
};

export default function Counter({
  count,
  title,
  className,
  onClick,
}: CounterPropType) {
  return (
    <div className={classNames("flex flex-col gap-2", className)}>
      {title && <span>{title}</span>}
      <div className="flex items-center gap-2">
        <CounterButton
          disabled={!count}
          onClick={() => onClick(-1)}
        >
          <Minus />
        </CounterButton>
        <span className="text-sm">{count}</span>
        <CounterButton
          disabled={count > 5}
          onClick={() => onClick(1)}
        >
          <Plus />
        </CounterButton>
      </div>
    </div>
  );
}
