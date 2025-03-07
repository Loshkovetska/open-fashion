import CartItem from "@/components/common/cart-item";
import { useAppSelector } from "@/lib/hooks";

export default function OrderList() {
  const { cartList } = useAppSelector((state) => state.cart);

  return (
    <div className="flex flex-col gap-2 mb-4 max-w-[900px] mx-auto">
      {cartList?.map((c) => (
        <CartItem
          {...c}
          key={c._id}
        />
      ))}
    </div>
  );
}
