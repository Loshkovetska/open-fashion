import { useDispatch } from "react-redux";
import { ReactNode } from "react";
import { updateCount } from "../../../store/cartSlice";
import Counter from "../Counter";

const CartItem = ({ cartItem }: { cartItem: any }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-3">
      <div className="w-[100px] h-[133px]">
        <img
          src={cartItem?.src}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <span className="text-sm text-black mb-1 uppercase">
          {cartItem.title}
        </span>
        <p className="text-[12px] text-grayLabel line-clamp-1">
          {cartItem.description}
        </p>

        <div className="my-3">
          <Counter
            count={cartItem.count}
            minusClick={() =>
              dispatch(
                updateCount({
                  method: "minus",
                  _id: cartItem._id,
                })
              )
            }
            plusClick={() =>
              dispatch(
                updateCount({
                  method: "plus",
                  _id: cartItem._id,
                })
              )
            }
          />
        </div>
        <span className="text-primary text-sm">${cartItem.price}</span>
      </div>
    </div>
  );
};

export default CartItem;

export const CartItemButton = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      className="w-5 h-5 border border-grayLight rounded-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
