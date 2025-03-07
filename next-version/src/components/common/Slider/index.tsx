import { useMemo } from "react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";

type SliderPropType = {
  autoPlay?: boolean;
  slides: Array<any>;
  slidesPerView: number | "auto";
  spaceBetween: number;
  className?: string;
  slideClass?: string;
  sliderStyle?: object;
  direction?: "vertical" | "horizontal";
};

const Slider = ({
  autoPlay = false,
  slides = [],
  slidesPerView = 1,
  spaceBetween = 10,
  className = "",
  slideClass = "",
  sliderStyle = {},
  direction,
}: SliderPropType) => {
  const config: SwiperOptions = useMemo(
    () => ({
      modules: [Pagination],
      slidesPerView,
      spaceBetween,
      className,
      style: sliderStyle,
      pagination: {
        clickable: true,
        renderBullet: function (index: number, className: string) {
          return `<span class="${className}"/>`;
        },
      },
      direction,
      ...(autoPlay
        ? {
            delay: 2500,
          }
        : {}),
    }),
    [slidesPerView, spaceBetween, className, sliderStyle, direction, autoPlay]
  );

  return (
    <Swiper {...config}>
      {slides?.map((c, i) => (
        <SwiperSlide
          key={i}
          className={slideClass}
        >
          {c}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
