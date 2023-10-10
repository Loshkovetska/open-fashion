import { useState } from "react";
import CaretDown from "../../../assets/icons/CaretDown.svg";
import classNames from "classnames";
const Select = ({
  value,
  list,
  onChange,
}: {
  value: string;
  list: Array<string>;
  onChange: (value: string) => void;
}) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="flex flex-col relative">
      <div
        className="flex items-center justify-center w-fit px-3 py-2 bg-grayOpacity rounded-[33px] cursor-pointer"
        onClick={() => setOpen(!isOpen)}
      >
        {value}
        <CaretDown
          className={classNames("transition-all", isOpen ? "rotate-180" : "")}
        />
      </div>
      <div
        className={classNames(
          "absolute top-[100%] left-0 w-full bg-[#E7EAEF] gap-1 flex flex-col rounded-[10px] py-2 z-[1] px-3 transition-all",
          isOpen ? "opacity-1 visible" : "opacity-0 invisible"
        )}
      >
        {list
          .filter((c) => c != value)
          ?.map((c) => (
            <div
              className="w-full  cursor-pointer"
              key={c}
              onClick={() => {
                onChange(c);
                setOpen(false);
              }}
            >
              {c}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Select;
