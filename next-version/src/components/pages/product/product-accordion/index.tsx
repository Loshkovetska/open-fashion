import { Forward } from "@/components/icons";
import classNames from "classnames";
import { ReactNode, useEffect, useRef, useState } from "react";

type ProductAccordionPropType = {
  icon: ReactNode;
  title: string;
  text: string;
};

export default function ProductAccordion({
  icon,
  title,
  text,
}: ProductAccordionPropType) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.style.height = isOpen ? ref.current.scrollHeight + "px" : "0px";
  }, [isOpen]);

  return (
    <div className="flex gap-2 border-b border-gray-label/20">
      {icon}
      <div
        className={classNames(
          "flex-grow transition-all",
          !isOpen && "overflow-hidden"
        )}
      >
        <span
          className="text-base mb-1 leading-5 uppercase flex items-center justify-between gap-1"
          onClick={() => setOpen(!isOpen)}
        >
          {title} <Forward className={classNames(isOpen && "rotate-180")} />
        </span>
        <p
          className={classNames(
            "text-base leading-6 mb-4 text-gray-label transition-all",
            !isOpen && "overflow-hidden"
          )}
          ref={ref}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
