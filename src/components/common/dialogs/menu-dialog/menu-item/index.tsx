import { Forward } from "@/components/icons";
import { MenuTab } from "@/lib/type";
import classNames from "classnames";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function MenuItem(c: MenuTab) {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = `${open ? ref.current.scrollHeight : 0}px`;
    }
  }, [open]);
  return (
    <div className={classNames("overflow-hidden pt-5", open && "pb-5")}>
      <div
        className="flex gap-4 items-center justify-between pb-4 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="flex flex-grow text-4"> {c.title}</span>
        <span
          className={classNames(
            "transition-all",
            open ? "rotate-180" : "rotate-0"
          )}
        >
          <Forward />
        </span>
      </div>
      <div
        className="flex flex-col gap-4 transition-all pl-5"
        ref={ref}
      >
        {c.list?.map((ci) => (
          <Link
            href={ci.link}
            key={ci.title}
          >
            {ci.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
