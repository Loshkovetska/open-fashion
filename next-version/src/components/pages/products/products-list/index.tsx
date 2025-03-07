"use client";
import GoodItem from "@/components/common/good-item";
import Pagination from "@/components/common/pagination";
import { useAppSelector } from "@/lib/hooks";
import classNames from "classnames";
import { useMemo, useState } from "react";

const COUNT_PER_PAGE = 12;

export default function ProductsList() {
  const { filterGoods, filters, goodsList } = useAppSelector(
    (state) => state.products
  );
  const [offsets, setOffsets] = useState({ start: 0, end: 0 });

  const currentItems = useMemo(() => {
    if (!offsets.end && !offsets.start) return filterGoods;
    return filterGoods.slice(offsets.start, offsets.end);
  }, [filterGoods, offsets]);

  return (
    <section className="w-full px-4 pt-4 grow flex flex-col">
      {goodsList.length > 0 && (
        <>
          <div
            className={classNames(
              "max-w-[1280px] mx-auto w-full gap-x-[12px] gap-y-4",
              filters.view == "grid" ? "grid grid-cols-auto" : "flex flex-col"
            )}
          >
            {currentItems?.map((c) => (
              <GoodItem
                key={c._id}
                {...c}
                vertical={filters.view == "grid"}
              />
            ))}
          </div>
          {goodsList.length > COUNT_PER_PAGE && (
            <Pagination
              countPerPage={COUNT_PER_PAGE}
              totalCount={goodsList.length || 0}
              setOffsets={setOffsets}
            />
          )}
        </>
      )}
      {!goodsList.length && (
        <p className="text-md text-center py-10 self-center justify-center">
          No Products Were Found
        </p>
      )}
    </section>
  );
}
