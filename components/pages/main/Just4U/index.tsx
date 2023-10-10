import Divider from "../../../common/Divider";
import HeadLine2 from "../../../common/HeadLine2";
import GoodItem from "../../../common/GoodItem";
import { useSelector } from "react-redux";
import Slider from "../../../common/Slider";

const Just4U = () => {
  const { goodsList: goods } = useSelector((state: any) => state.products);

  return (
    <section className="py-[64px] px-[16px]">
      <div className="w-fit flex flex-col items-center justify-center m-auto gap-2">
        <HeadLine2> Just for you</HeadLine2>
        <Divider />
      </div>
      <div className="mt-6 max-w-[1280px] m-auto">
        <Slider
          spaceBetween={10}
          slidesPerView={"auto"}
          sliderStyle={{
            height: "100%",
          }}
          className="grey"
          slideClass="max-w-[255px]"
          slides={goods.slice(0, 10).map((c: any) => (
            <GoodItem item={c} vertical key={c._id} />
          ))}
        />
      </div>
    </section>
  );
};

export default Just4U;
