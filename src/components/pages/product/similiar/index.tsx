"use client";
import ProductsList from "@/components/common/products-list";
import TopTitle from "@/components/pages/checkout/TopTitle";
import { useAppSelector } from "@/lib/hooks";
import { useMemo } from "react";

export default function Similar() {
  const { good, goodsList } = useAppSelector((state) => state.products);

  const list = useMemo(
    () => goodsList.filter((c) => c.cat == good?.cat).slice(0, 10),
    [good, goodsList]
  );

  return (
    <section className="py-16 px-4">
      <TopTitle title="You may also like" />
      <ProductsList goods={list} />
    </section>
  );
}
