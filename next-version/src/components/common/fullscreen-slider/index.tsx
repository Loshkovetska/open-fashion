"use client";
import Slider from "@/components/common/slider";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { changeDialogState } from "@/lib/store/globalSlice";
import classNames from "classnames";
import Image from "next/image";

export default function FullScreenSlider() {
  const {
    global: { isGalleryOpen },
    products: { good },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <section
      className={classNames(
        "w-screen h-screen bg-black/75 fixed top-0 left-0 z-50 px-4 py-32 transition-all",
        isGalleryOpen ? "scale-100" : "scale-0"
      )}
      onClick={() => dispatch(changeDialogState("isGalleryOpen"))}
    >
      <div
        className="w-full h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <Slider
          direction="vertical"
          slidesPerView={1}
          spaceBetween={0}
          className="vertical"
          slideClass="h-screen flex justify-center items-center"
          sliderStyle={{
            width: "100%",
            height: "100%",
          }}
          slides={
            good?.src?.map((c) => (
              <Image
                src={c}
                alt={good?.title || ""}
                className="object-contain w-full h-full"
                key={c}
                width={500}
                height={500}
              />
            )) || []
          }
        />
      </div>
    </section>
  );
}
