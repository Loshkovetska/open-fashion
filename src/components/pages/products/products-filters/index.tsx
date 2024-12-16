"use client";
import Select from "@/components/common/select";
import { GridView, ListView, Sort } from "@/components/icons";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { updateFilters } from "@/lib/store/productSlice";
import classNames from "classnames";
import { useCallback } from "react";

export default function ProductsFilter() {
  const dispatch = useAppDispatch();
  const { goodsList, filters } = useAppSelector((state) => state.products);

  const onFilterChange = useCallback(
    (key: "view" | "sortBy" | "dir", value: string) => {
      dispatch(
        updateFilters({
          ...filters,
          [key]: value,
        })
      );
    },
    [filters, dispatch]
  );

  return (
    <div className="px-4 py-1 pt-[77px] flex items-center justify-between max-w-[1280px] mx-auto w-full">
      <span className="text-base uppercase leading-4 text-gray-body">
        {goodsList?.length} apparel
      </span>
      <div className="flex items-center gap-3">
        <Select
          value={filters.sortBy}
          list={["New", "Rating", "Price"]}
          onChange={(value) => onFilterChange("sortBy", value)}
        />
        <div
          className="flex items-center justify-center w-fit px-3 py-3 bg-gray-opacity rounded-[33px] cursor-pointer"
          onClick={() =>
            onFilterChange("view", filters.view == "grid" ? "list" : "grid")
          }
        >
          {filters.view == "grid" ? <GridView /> : <ListView />}
        </div>
        <div
          className="flex items-center justify-center w-fit px-3 py-3 bg-gray-opacity rounded-[33px] cursor-pointer"
          onClick={() =>
            onFilterChange("dir", filters.dir == "down" ? "up" : "down")
          }
        >
          <Sort
            className={classNames(
              "size-5",
              filters.dir == "down" ? "fill-black" : "fill-primary"
            )}
          />
        </div>
      </div>
    </div>
  );
}
