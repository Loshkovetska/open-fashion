"use client";
import GoodItem from "@/components/common/good-item";
import Slider from "@/components/common/slider";
import TopTitle from "@/components/pages/checkout/TopTitle";
import { useAppSelector } from "@/lib/hooks";
import { useMemo } from "react";

export default function Just4U() {
  const { goodsList: goods } = useAppSelector((state) => state.products);

  const list = useMemo(() => goods.slice(0, 10), [goods]);

  return (
    <section className="py-16 px-4">
      <TopTitle title="Just for you" />
      <div className="max-w-[1280px] mx-auto">
        <Slider
          spaceBetween={10}
          slidesPerView="auto"
          sliderStyle={{
            height: "100%",
          }}
          className="grey"
          slideClass="max-w-[255px]"
          slides={list.map((c) => (
            <GoodItem
              {...c}
              vertical
              key={c._id}
            />
          ))}
        />
      </div>
    </section>
  );
}
