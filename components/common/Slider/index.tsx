import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";

const Slider = ({
  autoPlay = false,
  slides = [],
  slidesPerView = 1,
  spaceBetween = 10,
  className = "",
  slideClass = "",
  sliderStyle = {},
  direction = "horizontal",
}: {
  autoPlay?: boolean;
  slides: Array<any>;
  slidesPerView: number | "auto";
  spaceBetween: number;
  className?: string;
  slideClass?: string;
  sliderStyle?: object;
  direction?: "vertical" | "horizontal";
}) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<span class="${className}"></span>`;
    },
  };

  const config = {
    modules: [Pagination],
    slidesPerView,
    spaceBetween,
    className,
    style: sliderStyle,
    pagination,
    direction,
    ...(autoPlay
      ? {
          delay: 2500,
          disableOnInteraction: false,
        }
      : {}),
  };

  return (
    <Swiper {...config}>
      {slides?.map((c, i) => (
        <SwiperSlide key={i} className={slideClass}>
          {c}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
