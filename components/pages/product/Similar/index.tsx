import { useSelector } from "react-redux";
import HeadLine2 from "../../../common/HeadLine2";
import Divider from "../../../common/Divider";
import GoodItem from "../../../common/GoodItem";

const Similar = () => {
  const { good, goodsList } = useSelector((state: any) => state.products);
  return (
    <section className="py-[64px] px-[16px]">
      <div className="w-fit flex flex-col items-center justify-center m-auto gap-2">
        <HeadLine2> You may also like </HeadLine2>
        <Divider />
      </div>
      <div className="mt-6 max-w-[1280px] m-auto grid gap-[8px] grid-cols-auto">
        {goodsList
          .filter((c: any) => c.cat == good?.cat)
          .slice(0, 10)
          .map((c: any) => (
            <GoodItem item={c} vertical key={c._id} />
          ))}
      </div>
    </section>
  );
};

export default Similar;
