"use client";
import Slider from "@/components/common/slider";
import Button from "@/components/ui/button";
import { SLIDES } from "@/lib/constants";
import classNames from "classnames";

export default function Banner() {
  const titleStyle =
      "font-serif text-[37px] text-gray-body font-bold italic tracking-[2px] uppercase leading-[43px] mix-blend-multiply	opacity-[0.7]",
    buttonStyle =
      "rounded-[30px] backdrop-blur-[2px] !bg-[#00000066] text-white !w-fit px-[30px]";

  return (
    <div className="w-full h-screen flex pt-[59px]">
      <Slider
        autoPlay
        spaceBetween={0}
        slidesPerView={1}
        sliderStyle={{
          height: "100%",
          width: "100%",
        }}
        slideClass="h-full"
        slides={SLIDES?.map((c) => (
          <div
            key={c.src}
            className="w-full h-full relative"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url('${c.src}')`,
            }}
          >
            <div className="relative z-10 pb-[40px] pt-[230px] pl-[32px] pr-4 h-full flex flex-col justify-between items-center">
              <h1 className="flex flex-col">
                <span className={classNames(titleStyle, "pl-2")}>
                  {c.title}
                </span>
                <span className={classNames(titleStyle, "pl-[24px]")}>
                  {c.title2}
                </span>
                <span className={classNames(titleStyle)}>{c.title3}</span>
              </h1>
              <Button
                className={buttonStyle}
                href="/products"
              >
                Explore Collection
              </Button>
            </div>
          </div>
        ))}
      />
    </div>
  );
}
