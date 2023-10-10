import { useEffect, useRef, useState } from "react";
import HeadLine2 from "../../../common/HeadLine2";
import Triangle from "../../../../assets/icons/Triangle.svg";
import classNames from "classnames";
const Collections = () => {
  const [isPlay, setPlay] = useState(false);
  const [showBut, setShow] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    isPlay ? ref.current.play() : ref.current.pause();
  }, [isPlay]);
  return (
    <section className="py-16 max-w-[1280px] m-auto">
      <HeadLine2>Collections</HeadLine2>
      <img
        src="https://i.ibb.co/b3gSxq6/Frame-2.png"
        alt="Frame-2"
        className="w-full mt-4 object-cover"
      />
      <div className="flex justify-center mt-10 px-10">
        <img
          src="https://i.ibb.co/8PtSDCb/image-9.png"
          alt="image-9"
          className=" m-auto w-full max-w-[700px]"
        />
      </div>
      <div
        className="w-full mt-10 relative flex"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <div
          onClick={() => setPlay(!isPlay)}
          className={classNames(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] w-[32px] h-[32px] bg-[#00000080] rounded-full flex justify-center items-center cursor-pointer  transition-all",
            ((isPlay && showBut)||!isPlay) ? " opacity-1" : "opacity-0"
          )}
        >
          <span className={classNames("flex")}>
            <Triangle />
          </span>
        </div>
        <video
          ref={ref}
          className="w-full"
          src="https://media.istockphoto.com/id/1405904559/uk/%D0%B2%D1%96%D0%B4%D0%B5%D0%BE/%D0%B0%D0%B7%D1%96%D0%B0%D1%82%D1%81%D1%8C%D0%BA%D1%96-%D0%B6%D1%96%D0%BD%D0%BA%D0%B8-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%D0%B5%D1%80%D0%B8-%D0%BC%D0%BE%D0%B4%D0%B8-%D0%BF%D1%80%D0%BE%D0%B4%D0%B0%D1%8E%D1%82%D1%8C-%D0%BE%D0%B4%D1%8F%D0%B3-%D0%B2-%D1%96%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82%D1%96-%D0%B2%D0%B8%D0%BA%D0%BE%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%B2%D1%83%D1%8E%D1%87%D0%B8-%D0%BF%D0%BB%D0%B0%D0%BD%D1%88%D0%B5%D1%82%D0%B8-%D0%B2%D0%B7%D0%B0%D1%94%D0%BC%D0%BE%D0%B4%D1%96%D1%8E%D1%87%D0%B8.mp4?s=mp4-640x640-is&k=20&c=1nYb1ENZTnZMLDmmX3Gs4puzdLwFk0IzUFNZNw5CDyE="
        >
          <source src="https://media.istockphoto.com/id/1405904559/uk/%D0%B2%D1%96%D0%B4%D0%B5%D0%BE/%D0%B0%D0%B7%D1%96%D0%B0%D1%82%D1%81%D1%8C%D0%BA%D1%96-%D0%B6%D1%96%D0%BD%D0%BA%D0%B8-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%D0%B5%D1%80%D0%B8-%D0%BC%D0%BE%D0%B4%D0%B8-%D0%BF%D1%80%D0%BE%D0%B4%D0%B0%D1%8E%D1%82%D1%8C-%D0%BE%D0%B4%D1%8F%D0%B3-%D0%B2-%D1%96%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82%D1%96-%D0%B2%D0%B8%D0%BA%D0%BE%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%B2%D1%83%D1%8E%D1%87%D0%B8-%D0%BF%D0%BB%D0%B0%D0%BD%D1%88%D0%B5%D1%82%D0%B8-%D0%B2%D0%B7%D0%B0%D1%94%D0%BC%D0%BE%D0%B4%D1%96%D1%8E%D1%87%D0%B8.mp4?s=mp4-640x640-is&k=20&c=1nYb1ENZTnZMLDmmX3Gs4puzdLwFk0IzUFNZNw5CDyE=" />
        </video>
      </div>
    </section>
  );
};

export default Collections;
