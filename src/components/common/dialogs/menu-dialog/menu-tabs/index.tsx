import Divider from "@/components/common/divider";
import { MenuTab } from "@/lib/type";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

type NavTabsPropType = {
  tabs: {
    tab: string;
    list: MenuTab[];
  }[];
  tabChange: (value: number) => void;
};

export default function NavTabs({ tabs, tabChange }: NavTabsPropType) {
  const ref = useRef<HTMLDivElement>(null),
    lineRef = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    tabChange(tab);
    const child = ref.current as HTMLDivElement;

    if (lineRef.current) {
      lineRef.current.style.width = child.getBoundingClientRect().width + "px";
      lineRef.current.style.transform = `translate(${child.offsetLeft}px,0)`;
    }
  }, [tab]);

  return (
    <div className="flex border border-t-0 border-x-0 relative">
      {tabs?.map((c, i) => (
        <div
          key={c.tab}
          className={classNames(
            "font-sans text-lg pb-4 uppercase text-gray-body text-center transition-all tracking-[3px] cursor-pointer",
            tab == i ? "opacity-100" : "opacity-50",
            i + 1 == tabs?.length ? "mr-0" : "mr-10"
          )}
          onClick={() => setTab(i)}
          ref={tab == i ? ref : null}
        >
          {c.tab}
        </div>
      ))}
      <Divider
        ref={lineRef}
        color="primary"
        className="translate-x-[0] w-[128px] !absolute !bottom-0 !left-0 transition-all"
      />
    </div>
  );
}
