"use client";
import AddToCart from "@/components/common/add-to-cart";
import Slider from "@/components/common/slider";
import Variants from "@/components/common/variants";
import { Export, Resize } from "@/components/icons";
import ProductContentInfo from "@/components/pages/product/product-content/product-content-info";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { changeDialogState } from "@/lib/store/globalSlice";
import { setGood } from "@/lib/store/productSlice";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function ProductContent({ id }: { id: string }) {
  const dispatch = useAppDispatch();
  const [chosen, setChosen] = useState<{ color: string; size: string }>({
    color: "",
    size: "",
  });

  const pathname = usePathname();
  const { good } = useAppSelector((state) => state.products);

  const updateState = (prop: string, value: string) => {
    setChosen((prev) => ({
      ...prev,
      [prop]: prev[prop as "color"] == value ? "" : value,
    }));
  };

  const copy = useCallback(
    () => navigator.clipboard.writeText(pathname),
    [pathname]
  );

  useEffect(() => {
    dispatch(setGood(Number(id)));
  }, [id]);

  return (
    <section className="pt-[90px] px-4 max-w-[1124px] mx-auto">
      <div className="flex gap-4 flex-wrap mb-8">
        <div className="flex w-2/3 product-content-slider relative">
          <Slider
            spaceBetween={0}
            slidesPerView={1}
            className="grey"
            sliderStyle={{
              width: "100%",
            }}
            slideClass="grey"
            slides={
              good?.src.map((c) => (
                <Image
                  src={c}
                  alt={good?.title}
                  className="object-cover w-full h-full"
                  key={c}
                  width={500}
                  height={500}
                />
              )) || []
            }
          />
          <span
            className="absolute bottom-4 right-4 flex justify-center items-center p-3 rounded-full bg-black/50 z-[1] cursor-pointer"
            onClick={() => dispatch(changeDialogState("isGalleryOpen"))}
          >
            <Resize />
          </span>
        </div>
        <div className="flex gap-1 flex-grow justify-between">
          <div className="flex flex-col flex-grow relative">
            <Export
              onClick={copy}
              className="cursor-pointer absolute right-0 top-0 z-[1]"
            />
            <span className="text-sm text-black mb-1 uppercase pr-6">
              {good?.title}
            </span>
            <p className="text-[12px] text-gray-label line-clamp-1 mb-2">
              {good?.description}
            </p>
            <span className="text-primary text-sm">${good?.price}</span>
            <Variants
              className="mt-6"
              colors={good?.colors || []}
              sizes={good?.sizes || []}
              selectedColor={chosen.color}
              selectedSize={chosen.size}
              onSelect={updateState}
            />
            {good && (
              <AddToCart
                className="w-full"
                canBeAdded={Object.values(chosen).every(Boolean)}
                item={{ ...good, ...chosen, count: 1, src: good.src[0] }}
              />
            )}
          </div>
        </div>
      </div>
      <ProductContentInfo />
    </section>
  );
}
