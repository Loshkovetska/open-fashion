import { useMemo, useState } from "react";
import Divider from "../../../common/Divider";
import classNames from "classnames";
import GoodItem from "../../../common/GoodItem";
import ForwardArrow from "../../../../assets/icons/ForwardArrow.svg";
import Link from "next/link";
import HeadLine2 from "../../../common/HeadLine2";
import { useSelector } from "react-redux";
const Arrival = () => {
  const { goodsList } = useSelector((state: any) => state.products);
  const [tab, setTab] = useState("All");
  const tabs = ["All", "Apparel", "Dress", "Tshirt", "Bag"];

  const goods = useMemo(() => {
    if (tab == "All") {
      return goodsList.filter((c: any) => c.isNew);
    }
    return goodsList.filter((c: any) => c.cat == tab && c.isNew);
  }, [tab]);
  return (
    <section className="py-[64px] px-[16px]">
      <div className="w-fit flex flex-col items-center justify-center m-auto gap-2">
        <HeadLine2> New Arrival</HeadLine2>
        <Divider />
      </div>
      <div className="flex items-center gap-6 justify-center mt-5 mb-4">
        {tabs?.map((c, i) => (
          <div
            key={c}
            className={classNames(
              "flex flex-col items-center cursor-pointer",
              tab == c ? "" : "text-grayPlaceholder"
            )}
            onClick={() => setTab(c)}
          >
            {c}
            {tab == c && (
              <span className="w-[4px] h-[4px] rotate-45 bg-primary flex"></span>
            )}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-auto gap-4 max-w-[1280px] m-auto">
        {goods?.map((c: any) => (
          <GoodItem item={c} key={c._id} vertical />
        ))}
      </div>
      <Link
        href={"/products"}
        className="text-[16px] flex gap-2 items-center m-auto justify-center mt-7"
      >
        Explore More <ForwardArrow />
      </Link>
    </section>
  );
};

export default Arrival;
