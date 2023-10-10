/* eslint-disable @next/next/no-img-element */
import { useDispatch, useSelector } from "react-redux";
import { changeFullScreenState } from "../../../store/globalSlice";
import Slider from "../Slider";
import classNames from "classnames";

const FullScreenSlider = ({ images }: { images: Array<string> }) => {
  const { isFullScreenSliderOpen } = useSelector((state: any) => state.global);
  const dispatch = useDispatch();
  return (
    <section
      className={classNames(
        "w-screen h-screen bg-black/75 fixed top-0 left-0 z-50 px-4 py-32 transition-all",
        isFullScreenSliderOpen ? "scale-100" : "scale-0"
      )}
      onClick={() => {
        dispatch(changeFullScreenState());
      }}
    >
      <div className=" w-full h-full" onClick={(e) => e.stopPropagation()}>
        <Slider
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={0}
          className="vertical"
          slideClass="h-screen flex justify-center items-center"
          sliderStyle={{
            width: "100%",
            height: "100%",
          }}
          slides={images.map((c) => (
            <img
              src={c}
              alt=""
              className="object-contain w-full h-full"
              key={c}
            />
          ))}
        />
      </div>
    </section>
  );
};

export default FullScreenSlider;
