import Button from "@/components/ui/button";
import classNames from "classnames";

export default function CounterButton(
  props: {
    disabled?: boolean;
    onClick: () => void;
  } & React.PropsWithChildren
) {
  return (
    <Button
      className={classNames(
        "!size-5 border border-gray-light rounded-full bg-transparent !p-0",
        props.disabled ? "pointer-events-none opacity-50" : ""
      )}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
}
