import Button from "../../../common/Button";
import classNames from "classnames";
import Slider from "../../../common/Slider";

const Banner = () => {
  const titleStyle =
      "font-serif text-[37px] text-grayBody font-bold italic tracking-[2px] uppercase leading-[43px] mix-blend-multiply	opacity-[0.7]",
    buttonStyle =
      "rounded-[30px] backdrop-blur-[2px] bg-[#00000066] text-white w-fit px-[30px]";

  const slides = [
    {
      src: "https://i.ibb.co/Dkfqnw9/image-10.png",
      content: () => {
        return (
          <h1 className="flex flex-col">
            <span className={classNames(titleStyle, "pl-[8px]")}>Luxury</span>
            <span className={classNames(titleStyle, "pl-[24px]")}>Fashion</span>
            <span className={classNames(titleStyle)}>&Accessories</span>
          </h1>
        );
      },
    },
    {
      src: "https://i.ibb.co/Dkfqnw9/image-10.png",
      content: () => {
        return (
          <h1 className="flex flex-col">
            <span className={classNames(titleStyle, "pl-[8px]")}>Luxury</span>
            <span className={classNames(titleStyle, "pl-[24px]")}>Fashion</span>
            <span className={classNames(titleStyle)}>&Accessories</span>
          </h1>
        );
      },
    },
    {
      src: "https://i.ibb.co/Dkfqnw9/image-10.png",
      content: () => {
        return (
          <h1 className="flex flex-col">
            <span className={classNames(titleStyle, "pl-[8px]")}>Luxury</span>
            <span className={classNames(titleStyle, "pl-[24px]")}>Fashion</span>
            <span className={classNames(titleStyle)}>&Accessories</span>
          </h1>
        );
      },
    },
  ];

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
        slides={slides?.map((c) => (
          <div
            key={c.src}
            className="w-full h-full relative"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url('${c.src}')`,
            }}
          >
            <div className="relative z-10 pb-[40px] pt-[230px] pl-[32px] pr-[16px] h-full flex flex-col justify-between items-center">
              {c.content()}
              <Button style={buttonStyle} color="" isLink href="/products">
                Explore Collection
              </Button>
            </div>
          </div>
        ))}
      />
    </div>
  );
};

export default Banner;
