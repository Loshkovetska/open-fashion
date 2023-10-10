import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import Divider from "../Divider";
const NavTabs = ({
  tabChange,
  tabs,
}: {
  tabChange: (value: number) => void;
  tabs: Array<{
    tab: string;
    list: Array<{
      title: string;
      list: Array<{
        title: string;
        link: string;
      }>;
    }>;
  }>;
}) => {
  const ref = useRef<HTMLDivElement>(null),
    lineRef = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    tabChange(tab);
    if (!ref.current) return;
    const tabsItems = Array.from(ref.current.children).filter((c) =>
      c.classList.contains("menu-tab")
    );

    if (tabsItems) {
      tabsItems.forEach((c: Element, i: number) => {
        if (tab == i) {
          if (lineRef.current) {
            lineRef.current.style.width =
              (c as HTMLDivElement).getBoundingClientRect().width + "px";
            lineRef.current.style.transform = `translate(${
              (c as HTMLDivElement).offsetLeft
            }px,0)`;
          }
        }
      });
    }
  }, [tab]);
  return (
    <div className="flex border border-t-0 border-x-0 relative" ref={ref}>
      {tabs?.map((c, i) => (
        <div
          className={classNames(
            "font-sans text-lg pb-4 uppercase text-grayBody menu-tab text-center  transition-all tracking-[3px]  cursor-pointer",
            tab == i ? "opacity-100" : "opacity-50",
            i + 1 == tabs?.length ? "mr-0" : "mr-10"
          )}
          key={c.tab}
          onClick={() => setTab(i)}
        >
          {c.tab}
        </div>
      ))}
      <div
        className={`translate-x-[0] w-[128px] absolute bottom-0 left-0 z transition-all`}
        ref={lineRef}
      >
        <Divider color="primary" />
      </div>
    </div>
  );
};

export default NavTabs;
