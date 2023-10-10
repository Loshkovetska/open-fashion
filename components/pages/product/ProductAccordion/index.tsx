import classNames from "classnames";
import { ReactNode, useEffect, useRef, useState } from "react";
import Forward from "../../../../assets/icons/Forward.svg";

const ProductAccordion = ({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.style.height = isOpen ? ref.current.scrollHeight + "px" : "0px";
  }, [isOpen]);
  return (
    <div className="flex gap-2 border-b border-grayLabel/20">
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
            "text-base leading-6 mb-4 text-grayLabel transition-all",
            !isOpen && "overflow-hidden"
          )}
          ref={ref}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default ProductAccordion;
