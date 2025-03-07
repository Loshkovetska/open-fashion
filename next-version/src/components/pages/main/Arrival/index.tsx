"use client";
import ProductsList from "@/components/common/products-list";
import { ForwardArrow } from "@/components/icons";
import TopTitle from "@/components/pages/checkout/TopTitle";
import { useAppSelector } from "@/lib/hooks";
import classNames from "classnames";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function Arrival() {
  const { goodsList } = useAppSelector((state) => state.products);
  const [tab, setTab] = useState("All");
  const tabs = ["All", "Apparel", "Dress", "Tshirt", "Bag"];

  const goods = useMemo(
    () =>
      goodsList.filter((c) => (tab === "All" ? true : c.cat == tab) && c.isNew),
    [tab, goodsList]
  );

  return (
    <section className="py-16 px-4">
      <TopTitle title="New Arrival" />
      <div className="flex items-center gap-6 justify-center mb-4">
        {tabs?.map((c) => (
          <div
            key={c}
            className={classNames(
              "flex flex-col items-center cursor-pointer",
              tab == c ? "" : "text-gray-placeholder"
            )}
            onClick={() => setTab(c)}
          >
            {c}
            {tab == c && (
              <span className="size-[4px] rotate-45 bg-primary flex" />
            )}
          </div>
        ))}
      </div>
      <ProductsList goods={goods} />
      <Link
        href="/products"
        className="text-4 flex gap-2 items-center mx-auto justify-center mt-7"
      >
        Explore More <ForwardArrow />
      </Link>
    </section>
  );
}
