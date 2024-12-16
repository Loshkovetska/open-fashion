import GoodItem from "@/components/common/good-item";
import { ProductType } from "@/lib/type";

type ProductsListPropType = {
  goods: ProductType[];
};

export default function ProductsList({ goods }: ProductsListPropType) {
  return (
    <div className="grid grid-cols-auto gap-4 max-w-[1280px] mx-auto">
      {goods?.map((c) => (
        <GoodItem
          key={c._id}
          {...c}
          vertical
        />
      ))}
    </div>
  );
}
