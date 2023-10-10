import { useSelector } from "react-redux";
import CartItem from "../../../common/CartItem";

const OrderList = () => {
  const { cartList } = useSelector((state: any) => state.cart);

  return (
    <div className="flex flex-col gap-2 mb-4 max-w-[900px] mx-auto">
      {cartList?.map((c: any) => (
        <CartItem cartItem={c} key={c._id} />
      ))}
    </div>
  );
};

export default OrderList;
