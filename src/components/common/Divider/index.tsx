import classNames from "classnames";

type DividerPropType = {
  color?: string;
  className?: string;
  ref?: React.RefObject<HTMLDivElement | null>;
};

export default function Divider({
  color = "gray-label",
  className,
  ref,
}: DividerPropType) {
  const bgColor = color == "gray-label" ? "transparent" : "primary";

  return (
    <div
      ref={ref}
      className={classNames(
        `flex relative border-[0.5px] border-${color} border-x-0 border-b-0 justify-center w-full`,
        className
      )}
    >
      <span
        className={`flex w-2 h-2 border-[0.5px] border-${color} rotate-45 -translate-y-1/2 -translate-x-1/2 absolute left-1/2 top-1/2 bg-${bgColor}`}
      />
    </div>
  );
}
